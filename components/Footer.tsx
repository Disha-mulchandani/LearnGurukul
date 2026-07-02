import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">

        {/* BRAND */}
        <div>
          <h2 className="text-4xl font-extrabold">
            LearnGurukul Academy
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Interactive online classes for English, Coding,
            Creative Writing, Science, Languages, and more.
          </p>
        </div>

        {/* COURSES */}
        <div>
          <h3 className="text-3xl font-bold">Courses</h3>

          <ul className="mt-6 space-y-4 text-gray-400 text-lg">
            <li>
              <Link href="/online-english-speaking-classes" className="hover:text-white">
                English Speaking
              </Link>
            </li>

            <li>
              <Link href="/online-creative-writing-classes" className="hover:text-white">
                Creative Writing
              </Link>
            </li>

            <li>
              <Link href="/online-python-classes" className="hover:text-white">
                Python Programming
              </Link>
            </li>

            <li>
              <Link href="/ap-computer-science" className="hover:text-white">
                AP Computer Science
              </Link>
            </li>

            <li>
              <Link href="/online-physics-classes" className="hover:text-white">
                Physics
              </Link>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-3xl font-bold">Quick Links</h3>

          <ul className="mt-6 space-y-4 text-gray-400 text-lg">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>

            <li>
              <Link href="/courses" className="hover:text-white">Courses</Link>
            </li>

            <li>
              <Link href="/become-a-teacher" className="hover:text-white">
                Become a Teacher
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-3xl font-bold">Contact</h3>

          <ul className="mt-6 space-y-4 text-gray-400 text-lg">
            <li>vidyaverse6@gmail.com</li>
            <li>WhatsApp Support Available</li>
          </ul>

          <div className="mt-6">
            <a
              href="https://instagram.com/learn_gurukul_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300"
            >
              📸 Instagram
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
        © 2026 LearnGurukul. All rights reserved.
      </div>

    </footer>
  );
}