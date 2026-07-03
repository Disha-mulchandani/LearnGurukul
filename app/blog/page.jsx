import { blogs } from "@/app/data/blogs";
import Link from "next/link";

export default function BlogListPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gray-50">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-4xl font-bold text-gray-900">
          LearnGurukul Blogs
        </h1>

        <p className="mt-4 text-gray-600">
          Educational blogs for students to improve learning skills
        </p>

      </div>

      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">

        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="bg-white p-6 rounded-xl border hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {blog.title}
            </h2>

            <p className="mt-3 text-gray-600 text-sm">
              {blog.description}
            </p>

            <p className="mt-4 text-blue-600 font-medium">
              Read more →
            </p>
          </Link>
        ))}

      </div>

    </main>
  );
}