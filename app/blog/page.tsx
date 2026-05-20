import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 max-w-4xl mx-auto">

      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-blue-700">
        Best Online Tutoring for Students in 2026
      </h1>

      {/* INTRO */}
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        Online tutoring has become one of the most effective ways for students
        to learn coding, math, science, and English.
        Platforms like <span className="text-blue-600 font-semibold">LearnAtHome</span>
        offer personalized 1:1 online tutoring that helps students learn faster and better.
      </p>

      {/* SECTION 1 */}
      <h2 className="mt-10 text-2xl font-bold text-black">
        Why Online Tutoring is Important
      </h2>

      <p className="mt-3 text-gray-700">
        Online tutoring gives students flexibility, personal attention, and access
        to expert teachers from anywhere in the world.
      </p>

      {/* SECTION 2 */}
      <h2 className="mt-10 text-2xl font-bold text-black">
        Benefits of 1:1 Learning
      </h2>

      <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-2">
        <li>Personalized learning experience</li>
        <li>Better understanding of concepts</li>
        <li>Instant doubt solving</li>
        <li>Flexible schedule</li>
      </ul>

      {/* SECTION 3 */}
      <h2 className="mt-10 text-2xl font-bold text-black">
        Best Subjects to Learn Online
      </h2>

      <p className="mt-3 text-gray-700">
        Students can learn Coding, Python, Java, Math, Science, and English
        through structured online courses and live classes.
      </p>

      {/* SECTION 4 */}
      <h2 className="mt-10 text-2xl font-bold text-black">
        How LearnAtHome Helps Students
      </h2>

      <p className="mt-3 text-gray-700">
        LearnAtHome provides 1:1 online tutoring with expert teachers,
        interactive sessions, and real-world learning examples.
      </p>

      {/* INTERNAL LINKS */}
      <div className="mt-10 space-y-4">

  <div className="mt-12 grid md:grid-cols-2 gap-6">
<Link
  href="/blog/creative-writing"
  className="block p-6 border rounded-xl hover:shadow transition"
>
  <h2 className="text-xl font-bold text-blue-600">
    Creative Writing for Students
  </h2>
  <p className="text-gray-600 mt-2">
    Improve imagination, vocabulary, and storytelling skills with expert guidance.
  </p>
</Link>
  {/* COURSES CARD */}
  <Link
    href="/courses"
    className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white group"
  >
    <h3 className="text-lg font-bold text-blue-600 group-hover:text-blue-600">
      📚 Explore Online Courses
    </h3>
    <p className="mt-2 text-gray-600 text-sm">
      Learn Coding, Math, Science, and English with expert tutors.
    </p>
  </Link>

  {/* CONTACT CARD */}
  <Link
    href="/contact"
    className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white group"
  >
    <h3 className="text-lg font-bold text-blue-600 group-hover:text-blue-600">
      💬 Contact LearnAtHome
    </h3>
    <p className="mt-2 text-gray-600 text-sm">
      Book your free demo class or ask any questions instantly.
    </p>
  </Link>

</div>
</div>

      {/* CTA */}
      <div className="mt-16 text-center bg-blue-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold">
          Start Learning Today 🚀
        </h2>

        <p className="mt-2 text-gray-600">
          Book your free demo class and start your learning journey.
        </p>

        <Link
          href="/student-enrollment"
          className="inline-block mt-5 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Book Free Demo
        </Link>
      </div>

    </main>
  );
}