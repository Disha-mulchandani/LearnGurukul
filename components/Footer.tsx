export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">

        <div>
          <h2 className="text-4xl font-extrabold">
            Learnora Academy
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Interactive online classes for English, Coding,
            Creative Writing, Science and more.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            Subjects
          </h3>

          <ul className="mt-6 space-y-3 text-gray-400 text-lg">
            <li>English</li>
            <li>Python</li>
            <li>Creative Writing</li>
            <li>AP Computer Science</li>
            <li>Physics</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            Contact
          </h3>

          <ul className="mt-6 space-y-3 text-gray-400 text-lg">
            <li>learnoraacademy@gmail.com</li>
            <li>Online Classes Worldwide</li>
            <li>WhatsApp Support Available</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
        © 2026 Learnora Academy. All rights reserved.
      </div>

    </footer>
  );
}