import Link from "next/link";

export default function CreativeWritingBlog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-6 py-20">

      {/* HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight">
          Creative Writing for Students: Unlock Your Imagination in 2026 ✍️
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Creative writing is not just writing — it is the art of expressing imagination,
          emotions, and ideas in a powerful and beautiful way. At
          <span className="text-blue-600 font-semibold"> LearnAtHome</span>, students learn
          how to turn simple thoughts into amazing stories.
        </p>

      </div>

      {/* STORY STARTER */}
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-white border rounded-2xl shadow-sm">

        <h2 className="text-2xl font-bold text-blue-700">
          ✨ Story Starter Challenge
        </h2>

        <p className="mt-3 text-gray-700 text-lg">
          “One night, I found a glowing book under my bed. When I opened it… the words started changing themselves.”
        </p>

        <p className="mt-2 text-sm text-gray-500">
          👉 Continue this story using your imagination!
        </p>

      </div>

      {/* WHAT IS CREATIVE WRITING */}
      <div className="max-w-4xl mx-auto mt-12">

        <h2 className="text-2xl font-bold text-black">
          What is Creative Writing?
        </h2>

        <p className="mt-3 text-gray-700 leading-relaxed">
          Creative writing is a form of expression where students use imagination,
          storytelling skills, and vocabulary to create stories, essays, poems,
          and dialogues. It helps students think beyond textbooks.
        </p>

      </div>

      {/* BENEFITS */}
      <div className="max-w-4xl mx-auto mt-10">

        <h2 className="text-2xl font-bold text-black">
          Why Creative Writing is Important
        </h2>

        <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-6">
          <li>Improves imagination and creativity</li>
          <li>Builds strong vocabulary and communication skills</li>
          <li>Enhances confidence in writing exams and essays</li>
          <li>Helps students express emotions clearly</li>
        </ul>

      </div>

      {/* VOCABULARY */}
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-white border rounded-2xl">

        <h2 className="text-2xl font-bold text-black">
          📚 Powerful Vocabulary Words
        </h2>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          <p>✨ Enchanting</p>
          <p>✨ Mysterious</p>
          <p>✨ Extraordinary</p>
          <p>✨ Imagination</p>
          <p>✨ Adventure</p>
          <p>✨ Magical</p>
        </div>

      </div>

      {/* WRITING CHALLENGE */}
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-purple-50 border border-purple-100 rounded-2xl">

        <h2 className="text-2xl font-bold text-purple-700">
          🎯 Writing Challenge
        </h2>

        <p className="mt-3 text-gray-700">
          Write a short story (5–8 lines) about:
        </p>

        <p className="mt-2 font-semibold text-gray-900">
          “A school where books come alive and talk to students”
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Tip: Use emotions, dialogues, and descriptive words.
        </p>

      </div>

      {/* HOW LEARNATHOME HELPS */}
      <div className="max-w-4xl mx-auto mt-12">

        <h2 className="text-2xl font-bold text-black">
          How LearnAtHome Helps Students
        </h2>

        <p className="mt-3 text-gray-700 leading-relaxed">
          LearnAtHome provides personalized 1:1 creative writing classes where students
          learn storytelling, vocabulary building, essay writing, and imagination development
          with expert tutors.
        </p>

      </div>

      {/* INTERNAL LINKS */}
      <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-6">

        <Link
          href="/courses"
          className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-bold text-blue-700 text-lg">
            📚 Explore Courses
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Learn coding, writing, math, and more with expert teachers.
          </p>
        </Link>

        <Link
          href="/contact"
          className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-bold text-blue-700 text-lg">
            💬 Contact Us
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Book your free demo class today.
          </p>
        </Link>

      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto mt-16 text-center bg-blue-600 text-white p-10 rounded-3xl">

        <h2 className="text-3xl font-bold">
          Start Your Creative Writing Journey 🚀
        </h2>

        <p className="mt-3 text-blue-100">
          Join LearnAtHome and transform your imagination into powerful stories.
        </p>

        <Link
          href="/student-enrollment"
          className="inline-block mt-6 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Book Free Demo
        </Link>

      </div>

    </main>
  );
}