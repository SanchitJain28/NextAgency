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
