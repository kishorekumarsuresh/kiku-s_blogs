import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Blog } from "@/types/blogs";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export function getAllBlogs(): Blog[] {
  const files = fs.readdirSync(blogsDirectory);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const fullPath = path.join(blogsDirectory, file);

    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      ...data,
    } as Blog;
  });
}

export function getBlogBySlug(slug: string) {
  const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    frontmatter: data,
    content,
  };
}