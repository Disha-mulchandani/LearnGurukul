import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-extrabold text-blue-700">
          Learnora
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/become-a-teacher">Teach</Link>
          <Link href="/contact">Contact</Link>

        </div>

        <Link href="/student-enrollment">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition">
            Book Demo
          </button>
        </Link>

      </div>

    </nav>
  );
}