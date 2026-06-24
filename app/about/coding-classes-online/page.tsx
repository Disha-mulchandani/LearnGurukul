import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Coding Classes for Students | Bright Edu",

  description:
    "Learn coding through beginner-friendly online classes in Python, JavaScript, web development, and AP Computer Science.",
};

export default function CodingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-6 py-24">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-extrabold text-blue-700">
          Coding Classes for Kids & Beginners
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed">
          Learn Python, JavaScript, Scratch, web development,
          and computer science fundamentals through personalized online tutoring.
        </p>

      </div>

      <section className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-sm border">

          <h2 className="text-2xl font-bold">
            🐍 Python
          </h2>

          <p className="mt-4 text-gray-600">
            Beginner-friendly Python programming lessons.
          </p>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border">

          <h2 className="text-2xl font-bold">
            🌐 Web Development
          </h2>

          <p className="mt-4 text-gray-600">
            Learn HTML, CSS, JavaScript, and React basics.
          </p>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border">

          <h2 className="text-2xl font-bold">
            💻 AP Computer Science
          </h2>

          <p className="mt-4 text-gray-600">
            Tutoring support for AP CS principles and programming.
          </p>

        </div>

      </section>

    </main>
  );
}
