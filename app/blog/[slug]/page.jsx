import { blogs } from "@/app/data/blogs";
import { notFound } from "next/navigation";

export default function BlogPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="mt-4 text-gray-600">{blog.description}</p>
        <div className="mt-8 whitespace-pre-line">{blog.content}</div>
      </div>
    </main>
  );
}