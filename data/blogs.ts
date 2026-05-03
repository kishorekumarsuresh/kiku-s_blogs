import { Blog } from "../types/blogs";

export const blogs: Blog[] = [
  {
    title: "Refinements and the Chamber of Edge Cases",
    slug: "refinements-edge-cases",
    category: "ruby",
    date: "22 Feb 2026",
    readTime: "8 min read",
    description:
      "One of the most featured alternatives to monkey patching in Ruby is Refinements...",
    content: `
# Refinements and the Chamber of Edge Cases

Refinements are a way to scope monkey patches...

## Why use refinements?
- Avoid global pollution
- Safer extension
    `,
  },
  // add more...
];