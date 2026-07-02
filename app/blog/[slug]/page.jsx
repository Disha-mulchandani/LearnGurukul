import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

export default function BlogPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="min-h-screen px-6 py-20 bg-white">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900">
          {blog.title}
        </h1>

        <p className="mt-4 text-gray-600">
          {blog.description}
        </p>

        <div className="mt-8 text-gray-800 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>

      </div>

    </main>
  );
}