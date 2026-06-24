import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Homework Help for Students | Bright Edu",

  description:
    "Get personalized online homework help in Math, Science, English, Coding, Algebra, SAT preparation, and school subjects for students worldwide.",
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
          Get step-by-step homework help in Math, Science, English,
          Coding, SAT preparation, Algebra, and academic subjects through
          personalized online tutoring for USA and international students.
        </p>

      </div>

      {/* FEATURE CARDS */}

      <section className="mt-24 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg border">

          <h2 className="text-2xl font-bold text-green-700">
            📘 Math Homework Help
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Support for Algebra, Geometry, Fractions,
            SAT Math, equations, and school assignments.
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">

          <h2 className="text-2xl font-bold text-green-700">
            🔬 Science Support
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Understand Physics, Biology, Chemistry,
            and scientific concepts with guided explanations.
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">

          <h2 className="text-2xl font-bold text-green-700">
            💻 Coding & Computer Science
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Homework help for Python, Java, AP Computer Science,
            projects, logic building, and programming concepts.
          </p>

        </div>

      </section>

      {/* WHY SECTION */}

      <section className="mt-28 max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-gray-800">
          Why Students Choose LearnAtHome
        </h2>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          Our personalized one-to-one tutoring helps students
          improve confidence, understand concepts clearly,
          complete assignments successfully, and develop
          strong academic skills for school and beyond.
        </p>

      </section>

      {/* BENEFITS */}

      <section className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg border">

          <h3 className="text-2xl font-bold text-green-700">
            ✅ Step-by-Step Explanations
          </h3>

          <p className="mt-4 text-gray-600">
            Learn concepts clearly instead of memorizing answers.
          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">

          <h3 className="text-2xl font-bold text-green-700">
            🌍 Worldwide Online Support
          </h3>

          <p className="mt-4 text-gray-600">
            Flexible online classes for students in the USA,
            UK, Canada, UAE, and worldwide.
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
