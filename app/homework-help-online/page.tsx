import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Homework Help for Students | LearnGurukul",

  description:
    "Get personalized 1:1 online homework help in Math, Science, English, Coding, SAT preparation, and school subjects for students worldwide.",
};

export default function HomeworkHelpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 px-6 py-24">

      {/* HERO */}

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 leading-tight">
          Online Homework Help for Students
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Get step-by-step 1:1 online homework help in Math, Science, English,
          Coding, SAT preparation, Algebra, and school subjects for students
          in the USA, UK, Canada, Australia, India, and worldwide.
        </p>

      </div>

      {/* FEATURE CARDS */}

      <section className="mt-24 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg border">

          <h2 className="text-2xl font-bold text-green-700">
            📘 Math Homework Help
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Help with Algebra, Geometry, Fractions, Equations,
            and SAT Math problems.
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">

          <h2 className="text-2xl font-bold text-green-700">
            🔬 Science Support
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Biology, Chemistry, Physics, and concept-based learning
            with simple explanations.
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">

          <h2 className="text-2xl font-bold text-green-700">
            💻 Coding & Computer Science
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Python, Java, AP Computer Science, and programming projects
            with step-by-step guidance.
          </p>

        </div>

      </section>

      {/* WHY SECTION */}

      <section className="mt-28 max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-gray-800">
          Why Students Choose LearnGurukul
        </h2>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          Our 1:1 online tutoring helps students understand concepts clearly,
          complete assignments faster, and improve academic performance with confidence.
        </p>

      </section>

      {/* BENEFITS */}

      <section className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg border">

          <h3 className="text-2xl font-bold text-green-700">
            ✅ Step-by-Step Explanations
          </h3>

          <p className="mt-4 text-gray-600">
            Learn concepts instead of memorizing answers.
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">

          <h3 className="text-2xl font-bold text-green-700">
            🌍 Worldwide Online Support
          </h3>

          <p className="mt-4 text-gray-600">
            Students from USA, UK, Canada, Australia, India, and more.
          </p>

        </div>

      </section>

      {/* CTA */}

      <div className="mt-24 text-center">

        <Link
          href="/student-enrollment"
          className="inline-block bg-green-600 hover:bg-green-700 transition text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl"
        >
          Get Homework Help Today
        </Link>

      </div>

    </main>
  );
}