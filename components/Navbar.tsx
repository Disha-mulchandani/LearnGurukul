import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

        {/* LOGO */}
        <Link href="/">
          <div className="flex items-center gap-4 cursor-pointer">

            {/* LOGO IMAGE */}
            <Image
              src="/logo.jpeg"
              alt="LearnGurukul Logo"
              width={52}
              height={52}
              className="rounded-xl object-cover"
            />

            {/* TEXT */}
            <div className="leading-tight">
              <h1 className="text-xl md:text-2xl font-extrabold text-blue-700">
                LearnGurukul
              </h1>

              <p className="text-[11px] text-gray-500 tracking-wide">
                Live Classes | Interactive Learning
              </p>
            </div>

          </div>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/courses" className="hover:text-blue-600 transition">
            Courses
          </Link>

          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          <Link href="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>

        </div>

        {/* CTA BUTTON */}
        <Link
          href="/student-enrollment"
          className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition"
        >
          Book Demo
        </Link>

      </div>
    </nav>
  );
}