import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAT Math Preparation Online | Bright Edu",
  description:
    "Prepare for SAT Math with personalized online tutoring, practice questions, and step-by-step explanations for USA and international students.",
};

export default function SATMathPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-6 py-24">

      {/* HERO SECTION */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-700">
          SAT Math Preparation
        </h1>

        <p className="mt-8 text-xl text-black leading-relaxed">
          Master SAT Math with structured learning, real exam-style practice,
          step-by-step explanations, and personalized online tutoring designed
          for US and international students.
        </p>

        <div className="mt-6 text-black">
          Covering Algebra, Geometry, Data Analysis, Word Problems, and Advanced Problem Solving.
        </div>
      </div>

      {/* FEATURES */}
      <section className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <h2 className="text-2xl font-bold text-blue-700">📘 Algebra Mastery</h2>
          <p className="mt-4 text-black">
            Linear equations, inequalities, functions, and expressions explained with SAT-level practice questions and shortcuts.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <h2 className="text-2xl font-bold text-blue-700">📐 Geometry & Trigonometry</h2>
          <p className="mt-4 text-black">
            Learn triangles, circles, angles, coordinate geometry, and essential formulas used in SAT exam questions.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <h2 className="text-2xl font-bold text-blue-700">⏱ Speed & Accuracy</h2>
          <p className="mt-4 text-black">
            Improve time management with timed quizzes, tricks, and strategies to solve questions faster with accuracy.
          </p>
        </div>

      </section>

      {/* WHAT STUDENTS GET */}
      <section className="mt-24 max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-sm border">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          What You Will Learn
        </h2>

        <ul className="mt-8 space-y-4 text-black text-lg">
          <li>✔ Step-by-step SAT Math problem solving techniques</li>
          <li>✔ Real SAT-style practice questions with explanations</li>
          <li>✔ Formula sheets for quick revision</li>
          <li>✔ Graph-based and data interpretation questions</li>
          <li>✔ Tricks to eliminate wrong answers quickly</li>
          <li>✔ Full-length mock tests with scoring analysis</li>
        </ul>
      </section>

      {/* PRACTICE TYPES */}
      <section className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="bg-white p-8 rounded-2xl border shadow-sm">
          <h3 className="text-2xl font-bold text-blue-700">🧠 Concept Building</h3>
          <p className="mt-4 text-black">
            Learn each topic from basics to advanced level with visual explanations and guided examples.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border shadow-sm">
          <h3 className="text-2xl font-bold text-blue-700">📝 Practice Tests</h3>
          <p className="mt-4 text-black">
            Solve chapter-wise quizzes and full-length SAT mock tests designed to simulate real exam difficulty.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border shadow-sm">
          <h3 className="text-2xl font-bold text-blue-700">📊 Performance Tracking</h3>
          <p className="mt-4 text-black">
            Track accuracy, speed, and weak areas with detailed feedback after every test.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border shadow-sm">
          <h3 className="text-2xl font-bold text-blue-700">🎯 Exam Strategy</h3>
          <p className="mt-4 text-black">
            Learn how to attempt SAT Math strategically, manage time, and avoid common mistakes.
          </p>
        </div>

      </section>

      {/* CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-blue-700">
          Start Your SAT Math Journey Today
        </h2>

        <p className="mt-4 text-black">
          Join personalized online tutoring and improve your SAT score step by step.
        </p>

        <Link
          href="/student-enrollment"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-4 rounded-2xl font-semibold"
        >
          Book Free Demo
        </Link>
      </div>

    </main>
  );
}
