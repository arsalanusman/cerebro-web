import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ResourcePost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author?: string;
  ogImage?: string;
  category?: string;
  readTime?: string;
  draft?: boolean;
  content: string;
}

export function getMdxFiles(dir: string): ResourcePost[] {
  const fullPath = path.join(process.cwd(), "content", dir);
  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);
  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(fullPath, file);
      const rawContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(rawContent);
      const slug = data.slug || file.replace(/\.mdx?$/, "");

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "2026-11-19",
        updated: data.updated,
        author: data.author || "Cerebro dNano Team",
        category: data.category || "Reporting",
        readTime: data.readTime || "5 min read",
        ogImage: data.ogImage,
        draft: Boolean(data.draft),
        content,
      };
    })
    .filter((post) => !post.draft);
}

export function getMdxBySlug(dir: string, slug: string): ResourcePost | null {
  const posts = getMdxFiles(dir);
  return posts.find((p) => p.slug === slug) || null;
}
