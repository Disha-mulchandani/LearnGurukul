import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algebra Basics Step-by-Step | Bright Edu",

  description:
    "Learn algebra through beginner-friendly online tutoring, equations, worksheets, homework help, and SAT Math preparation.",
};

export default function AlgebraPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-indigo-50 px-6 py-24">

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700">
          Learn Algebra Step-by-Step
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Master algebra concepts through personalized online tutoring,
          equations, worksheets, SAT Math support, and beginner-friendly lessons.
        </p>

      </div>

      <section className="mt-24 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg border">
          <h2 className="text-2xl font-bold text-indigo-700">
            📘 Linear Equations
          </h2>

          <p className="mt-4 text-gray-600">
            Learn variables, expressions, equations,
            and algebra problem-solving techniques.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">
          <h2 className="text-2xl font-bold text-indigo-700">
            🎯 SAT Algebra
          </h2>

          <p className="mt-4 text-gray-600">
            Build confidence for SAT Math through guided algebra practice.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">
          <h2 className="text-2xl font-bold text-indigo-700">
            🧠 Homework Help
          </h2>

          <p className="mt-4 text-gray-600">
            Get support for worksheets, assignments,
            and school algebra topics.
          </p>
        </div>

      </section>

      <div className="mt-24 text-center">

        <Link
          href="/student-enrollment"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl"
        >
          Start Learning Algebra
        </Link>

      </div>

    </main>
  );
}
