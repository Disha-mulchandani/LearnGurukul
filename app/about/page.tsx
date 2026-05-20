import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LearnAtHome | 1:1 Online Tutoring Platform",
  description:
    "LearnAtHome is a 1:1 online tutoring platform for Coding, Math, Science, and English. We help students learn with expert tutors through personalized learning.",
};
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-6 py-24">

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-700">
          About LearnAtHome
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          A modern 1:1 online tutoring platform helping students learn Coding,
          Math, Science, and English with expert guidance.
        </p>
      </div>

      {/* MISSION CARDS */}
      <section className="mt-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        <div className="p-6 bg-white rounded-2xl shadow-sm border">
          <h2 className="text-xl font-bold">🎯 Our Mission</h2>
          <p className="mt-2 text-gray-600">
            Make quality education accessible to every student worldwide.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-sm border">
          <h2 className="text-xl font-bold">👨‍🏫 Expert Tutors</h2>
          <p className="mt-2 text-gray-600">
            Learn from experienced tutors with personalized attention.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-sm border">
          <h2 className="text-xl font-bold">📚 Interactive Learning</h2>
          <p className="mt-2 text-gray-600">
            Live sessions, real examples, and practical learning.
          </p>
        </div>

      </section>

      {/* DETAILS */}
      <section className="mt-20 max-w-4xl mx-auto text-gray-700 space-y-6">
        <p>
          LearnAtHome is built to help students understand concepts deeply,
          not just memorize them.
        </p>

        <p>
          We offer structured learning paths in Coding, Math, Science, and English
          designed for beginners to advanced learners.
        </p>

        <p>
          Our goal is to build confidence, problem-solving skills, and real-world knowledge.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-20 text-center text-blue-700">
        <h2 className="text-2xl font-bold">
          Start Learning With Us 🚀
        </h2>

        <a
          href="/student-enrollment"
          className="inline-block mt-6 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Book Free Demo
        </a>
      </div>

    </main>
  );
}