import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: BlogAuthor;
  tags: string[];
  featured: boolean;
  content: string;
}

export interface PaginatedPosts {
  posts: BlogPost[];
  total: number;
  page: number;
  totalPages: number;
}

function parseBlogFile(fileName: string): BlogPost {
  const filePath = path.join(BLOG_DIR, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: data.slug || fileName.replace(/\.md$/, ""),
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    author: data.author,
    tags: data.tags || [],
    featured: data.featured || false,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map(parseBlogFile);
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getLatestPost(): BlogPost {
  return getAllPosts()[0];
}

export function getFeaturedPosts(count = 3): BlogPost[] {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured);
  return featured.length >= count ? featured.slice(0, count) : posts.slice(0, count);
}

export function getPaginatedPosts(
  page: number,
  perPage: number,
  excludeSlugs: string[] = []
): PaginatedPosts {
  const all = getAllPosts().filter((p) => !excludeSlugs.includes(p.slug));
  const total = all.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  const posts = all.slice(start, start + perPage);

  return { posts, total, page: safePage, totalPages };
}
