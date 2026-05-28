import { BlogPost } from "../types/blog";
import fs from "fs";
import path from "path";

export function getAllBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), "app/data/blog");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".json"));

  return files
    .map((file) => {
      const content = fs.readFileSync(path.join(blogDir, file), "utf-8");
      return JSON.parse(content) as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}
