import Link from "next/link";

export default function Navbar() {
  return (
    <nav
    aria-label="Main Navigation"
    className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 z-50 shadow-sm"
  >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

        {/* LOGO */}
        <Link href="/">

          <div className="flex items-center gap-4 cursor-pointer">

            {/* LOGO ICON */}
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">

              <span className="text-white text-2xl">
                🎓
              </span>

            </div>

            {/* LOGO TEXT */}
            <div>

              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-700">
                LearnAtHome
              </h1>

              <p className="text-xs text-gray-500 -mt-1 tracking-wide">
             1:1 Online Tutoring Platformdwide.
              </p>

            </div>

          </div>

        </Link>

        {/* NAVIGATION */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 font-semibold">

          <Link
            href="/"
            className="hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
<Link
  href="/courses"
  className="hover:text-blue-600 transition duration-300"
>
  Courses
</Link>
           
          <Link href="/become-a-teacher">
    Become a Teacher
</Link>
          <Link
            href="/about"
            className="hover:text-blue-600 transition duration-300"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-blue-600 transition duration-300"
          >
            Contact
          </Link>

        </div>
        

        {/* CTA BUTTON */}
        <Link href="/student-enrollment">

          <button className="bg-blue-600 text-white px-7 py-3 rounded-2xl font-bold shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300">

            Book Free Demo

          </button>

        </Link>

      </div>

    </nav>
  );
}