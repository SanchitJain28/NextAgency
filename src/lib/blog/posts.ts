import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { prisma } from "@/lib/db/prisma";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  category: string;
  tags: string[];
  content: string;
  readingTime: string;
  faqs?: FAQ[];
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  category: string;
  tags: string[];
  readingTime: string;
  faqs?: FAQ[];
}

function getMDPosts(): BlogPostMetadata[] {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.(md|mdx)$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const { text } = readingTime(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author || "ScaleFront Team",
      image: data.image,
      category: data.category || "Uncategorized",
      tags: data.tags || [],
      readingTime: text,
      faqs: data.faqs || [],
    };
  });
}

async function getDBPosts(): Promise<BlogPostMetadata[]> {
  const posts = await prisma.blog.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
  });

  return posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.publishedAt?.toISOString() || post.createdAt.toISOString(),
    author: post.author,
    image: post.image ?? undefined,
    category: post.category,
    tags: post.tags,
    readingTime: post.readingTime ?? "5 min read",
    faqs: (post.faqs as unknown as FAQ[]) || [],
  }));
}

export async function getAllPosts(): Promise<BlogPostMetadata[]> {
  const mdPosts = getMDPosts();
  const dbPosts = await getDBPosts();

  const combined = [...mdPosts, ...dbPosts];

  return combined.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Check DB first (new posts)
  const dbPost = await prisma.blog.findUnique({
    where: { slug, status: "published" },
  });

  if (dbPost) {
    return {
      slug: dbPost.slug,
      title: dbPost.title,
      description: dbPost.description,
      date: dbPost.publishedAt?.toISOString() || dbPost.createdAt.toISOString(),
      author: dbPost.author,
      image: dbPost.image ?? undefined,
      category: dbPost.category,
      tags: dbPost.tags,
      content: dbPost.content,
      readingTime: dbPost.readingTime ?? "5 min read",
      faqs: (dbPost.faqs as unknown as FAQ[]) || [],
    };
  }

  // Fallback to MD files (existing posts)
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    let fileContents;

    try {
      fileContents = fs.readFileSync(fullPath, "utf8");
    } catch {
      const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
      fileContents = fs.readFileSync(mdxPath, "utf8");
    }

    const { data, content } = matter(fileContents);
    const { text } = readingTime(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author || "ScaleFront Team",
      image: data.image,
      category: data.category || "Uncategorized",
      tags: data.tags || [],
      content,
      readingTime: text,
      faqs: data.faqs || [],
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Rest of functions — update signatures to async where needed
export async function getPostsByCategory(
  category: string,
): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase(),
  );
}

export async function getPostsByTag(tag: string): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map((post) => post.category)));
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.flatMap((post) => post.tags)));
}

export async function getRelatedPosts(
  currentSlug: string,
  limit: number = 3,
): Promise<BlogPostMetadata[]> {
  const currentPost = await getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = (await getAllPosts()).filter(
    (post) => post.slug !== currentSlug,
  );

  const scoredPosts = allPosts.map((post) => {
    let score = 0;
    if (post.category === currentPost.category) score += 3;
    const sharedTags = post.tags.filter((tag) =>
      currentPost.tags.includes(tag),
    );
    score += sharedTags.length;
    return { post, score };
  });

  return scoredPosts
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    })
    .slice(0, limit)
    .map((item) => item.post);
}

export async function searchPosts(query: string): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts();
  const lowerQuery = query.toLowerCase();

  return allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      post.category.toLowerCase().includes(lowerQuery),
  );
}

export async function getFeaturedPost(): Promise<BlogPostMetadata | null> {
  const posts = await getAllPosts();
  return posts.length > 0 ? posts[0] : null;
}
