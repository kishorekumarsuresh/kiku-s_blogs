import { getAllBlogs } from "@/lib/blogs";
import BlogList from "@/components/BlogList";

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen bg-page-bg flex justify-center items-start py-10 px-4 transition-colors">
      <div className="w-full max-w-5xl">
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}