import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAT Math Preparation Online | LearnGurukul",
  description:
    "Prepare for SAT Math with expert online tutoring, practice tests, step-by-step explanations, and personalized learning for USA and international students.",
};

export default function SATMathPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-blue-600 font-semibold tracking-[4px] uppercase">
          LearnGurukul SAT Preparation
        </p>

        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900">
          SAT Math Preparation Online
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
          Master SAT Math with structured lessons, practice questions,
          and personalized 1:1 tutoring. Designed for students in the USA
          and worldwide aiming for high SAT scores.
        </p>

        <p className="mt-6 text-gray-600">
          Topics include Algebra, Geometry, Data Analysis, Word Problems, and Advanced Problem Solving.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/student-enrollment"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Book Free Demo Class
          </Link>
        </div>

      </div>

      {/* FEATURES */}
      <section className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        <div className="border rounded-2xl p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-900">
            Algebra Mastery
          </h2>
          <p className="mt-3 text-gray-600">
            Linear equations, inequalities, functions, and SAT-level problem solving techniques.
          </p>
        </div>

        <div className="border rounded-2xl p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-900">
            Geometry & Trigonometry
          </h2>
          <p className="mt-3 text-gray-600">
            Learn triangles, circles, coordinate geometry, and essential SAT formulas.
          </p>
        </div>

        <div className="border rounded-2xl p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-900">
            Speed & Accuracy
          </h2>
          <p className="mt-3 text-gray-600">
            Improve timing strategies, shortcuts, and accuracy for real exam performance.
          </p>
        </div>

      </section>

      {/* WHAT YOU LEARN */}
      <section className="mt-24 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-900">
          What You Will Learn
        </h2>

        <ul className="mt-8 text-gray-600 space-y-3 text-left inline-block">
          <li>✔ Step-by-step SAT Math solving methods</li>
          <li>✔ Real exam-style practice questions</li>
          <li>✔ Formula sheets for quick revision</li>
          <li>✔ Data interpretation & graph questions</li>
          <li>✔ Time-saving strategies and shortcuts</li>
          <li>✔ Full-length mock tests with analysis</li>
        </ul>

      </section>

      {/* FINAL CTA */}
      <div className="mt-24 text-center bg-blue-50 py-16 rounded-2xl max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-900">
          Improve Your SAT Math Score Today
        </h2>

        <p className="mt-4 text-gray-600">
          Join personalized online SAT tutoring and start practicing with expert guidance.
        </p>

        <div className="mt-8">
          <Link
            href="/student-enrollment"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Start Free Demo
          </Link>
        </div>

      </div>

    </main>
  );
}