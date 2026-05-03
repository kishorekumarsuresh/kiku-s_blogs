"use client";

import { useState } from "react";
import { Blog } from "../types/blogs";
import BlogCard from "./BlogCard";

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const uniqueCategories = Array.from(
    new Set(
      blogs.flatMap((b) =>
        b.category
          ? b.category.toLowerCase().split(",").map((c) => c.trim())
          : []
      )
    )
  );
  const filters = ["all", ...uniqueCategories];
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? blogs
      : blogs.filter((b) =>
          b.category
            ?.toLowerCase()
            .split(",")
            .map((c) => c.trim())
            .includes(active)
        );

  return (
    <div className="bg-surface rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-primary">Kiku's Blogs</h1>
        <div className="flex gap-2">
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
                active === cat
                  ? "bg-pill-active text-pill-active-fg"
                  : "bg-pill text-sub hover:bg-pill-hover"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted text-sm">No blogs found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}