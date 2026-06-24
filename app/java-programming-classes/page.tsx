import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Java Programming Classes | Bright Edu",

  description:
    "Learn Java programming online through beginner-friendly coding lessons, object-oriented programming, projects, and AP Computer Science support.",
};

export default function JavaProgrammingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 px-6 py-24">

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-700">
          Online Java Programming Classes
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Learn Java programming through interactive online classes designed
          for beginners, school students, AP Computer Science learners,
          and future software developers worldwide.
        </p>

      </div>

      <section className="mt-24 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg border">
          <h2 className="text-2xl font-bold text-orange-700">
            ☕ Java Fundamentals
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Learn variables, loops, conditions, arrays, methods,
            and beginner-friendly programming logic.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">
          <h2 className="text-2xl font-bold text-orange-700">
            🧠 Object-Oriented Programming
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Understand classes, objects, inheritance,
            polymorphism, encapsulation, and real-world coding concepts.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border">
          <h2 className="text-2xl font-bold text-orange-700">
            💻 Coding Projects
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Build mini Java projects and improve problem-solving,
            coding confidence, and software development skills.
          </p>
        </div>

      </section>

      <section className="mt-24 max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-gray-800">
          Why Learn Java?
        </h2>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          Java is one of the most widely used programming languages in the world.
          Students learn coding logic, software development, app creation,
          and strong computer science fundamentals useful for academics and careers.
        </p>

      </section>

      <div className="mt-24 text-center">

        <Link
          href="/student-enrollment"
          className="inline-block bg-orange-600 hover:bg-orange-700 transition text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl"
        >
          Book Free Java Demo
        </Link>

      </div>

    </main>
  );
}
