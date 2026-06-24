import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Physics Classes for Students | Bright Edu",

  description:
    "Learn Physics online through interactive tutoring, problem-solving, visual explanations, and personalized support for school students worldwide.",
};

export default function PhysicsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-6 py-24">

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700">
          Online Physics Classes
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Understand Physics concepts through visual explanations,
          equations, problem-solving, and personalized tutoring
          for school students worldwide.
        </p>

      </div>

      <section className="mt-24 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg border">
          <h2 className="text-2xl font-bold text-blue-700">
            ⚡ Mechanics
          </h2>

          <p className="mt-4 text-gray-600">
            Learn motion, force, energy,
            velocity, and real-world applications.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">
          <h2 className="text-2xl font-bold text-blue-700">
            🔬 Problem Solving
          </h2>

          <p className="mt-4 text-gray-600">
            Develop confidence solving Physics equations and numerical problems.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">
          <h2 className="text-2xl font-bold text-blue-700">
            📘 Exam Preparation
          </h2>

          <p className="mt-4 text-gray-600">
            School exam support with conceptual clarity and guided practice.
          </p>
        </div>

      </section>

      <div className="mt-24 text-center">

        <Link
          href="/student-enrollment"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl"
        >
          Book Free Physics Demo
        </Link>

      </div>

    </main>
  );
}
