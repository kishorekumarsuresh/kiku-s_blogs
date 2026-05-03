import Link from "next/link";
import { Blog } from "../types/blogs";

export default function BlogCard({ blog }: { blog: Blog }) {
  const categories = blog.category
    ? blog.category.split(",").map((c) => c.trim().toUpperCase())
    : [];

  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="border border-border rounded-xl p-5 hover:shadow-lg transition cursor-pointer bg-card h-full flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div>
          <p className="text-xs tracking-wider text-sub mb-2 font-medium">
            {categories.join(" · ")}
          </p>
          <h2 className="text-base font-semibold text-heading mb-4 leading-snug">
            {blog.title}
          </h2>
        </div>
        <div className="flex justify-between items-center text-sm text-muted">
          <span>{blog.date}</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}