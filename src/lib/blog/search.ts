import { Index } from "flexsearch";

import type { BlogPostMetadata } from "./types";

export type BlogListingPost = Pick<
  BlogPostMetadata,
  "slug" | "title" | "description" | "date" | "image" | "category" | "tags"
>;

export function createBlogSearch(posts: BlogListingPost[]) {
  const index = new Index({ tokenize: "forward" });
  posts.forEach((post, position) => {
    index.add(
      position,
      [post.title, post.category, ...post.tags, post.description].join(" "),
    );
  });

  return (query: string) => {
    const term = query.trim();
    if (!term) return posts;

    return index
      .search(term, { limit: posts.length })
      .map((position) => posts[Number(position)]);
  };
}
