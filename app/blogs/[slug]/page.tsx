import { getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/CodeBlock";
import remarkGfm from "remark-gfm";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { frontmatter, content } = getBlogBySlug(slug);

    return (
      <div className="min-h-screen bg-page-bg flex justify-center items-start py-10 px-4 transition-colors">
        <div className="w-full max-w-3xl">

          <a
            href="/blogs"
            className="text-xs uppercase tracking-widest text-muted hover:text-sub transition"
          >
            ← All Posts
          </a>

          <h1 className="text-3xl font-bold text-primary mt-4 mb-2">
            {frontmatter.title}
          </h1>

          <p className="text-sm text-muted mb-6">
            {frontmatter.date} · {frontmatter.readTime}
          </p>

          <p className="text-body mb-4">
            {frontmatter.description}
          </p>

          {frontmatter.category && (
            <div className="flex flex-wrap gap-2 mb-8">
              {frontmatter.category
                .split(",")
                .map((cat: string) => cat.trim())
                .map((cat: string) => (
                  <span
                    key={cat}
                    className="inline-block text-xs px-2.5 py-1 rounded-full border border-border bg-pill text-sub"
                  >
                    {cat}
                  </span>
                ))}
            </div>
          )}

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <MDXRemote
              source={content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              components={{ pre: CodeBlock }}
            />
          </div>

        </div>
      </div>
    );
  } catch {
    return notFound();
  }
}