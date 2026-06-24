import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Online C++ Programming Classes for Kids & Beginners | Bright Edu",

  description:
    "Learn C++ programming online with personalized 1:1 tutoring for students worldwide. Build coding logic, problem-solving skills, algorithms, and programming confidence through interactive live classes.",

  keywords: [
    "online C++ classes",
    "C++ programming tutor",
    "learn C++ online",
    "coding classes for kids",
    "C++ tutor online",
    "beginner C++ programming",
    "C++ coding classes",
    "computer programming for students",
    "online coding tutor",
    "C++ classes for beginners",
    "coding lessons online",
    "programming tutor for kids",
    "C++ homework help",
    "coding logic classes",
    "algorithms and programming",
    "Bright Edu C++ classes",
  ],

  openGraph: {
    title:
      "Online C++ Programming Classes | Bright Edu",
    description:
      "Interactive 1:1 C++ programming classes for beginners and school students worldwide.",
    siteName: "Bright Edu",
    type: "website",
  },
};

export default function CPPPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7ff] via-white to-[#eef6ff]">

      {/* HERO */}
      <section className="px-6 py-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold text-sm">
              💻 Interactive Coding Classes
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
              Online{" "}
              <span className="text-blue-600">
                C++ Programming
              </span>{" "}
              Classes
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Learn C++ programming through personalized 1:1 online tutoring
              designed for beginners, school students, and future programmers.
              Build strong coding fundamentals, algorithms, logic building,
              and problem-solving skills through live interactive sessions.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <a
                href="https://tally.so/r/q4oe18"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg">
                  🚀 Book Free Demo
                </button>
              </a>

              <Link href="/courses">
                <button className="border border-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
                  Explore More Courses
                </button>
              </Link>

            </div>

            {/* FEATURES */}
            <div className="mt-14 grid sm:grid-cols-3 gap-6">

              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="text-3xl font-extrabold text-blue-600">
                  1:1
                </h3>

                <p className="mt-2 text-gray-600">
                  Personalized Live Classes
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="text-3xl font-extrabold text-purple-600">
                  Beginner
                </h3>

                <p className="mt-2 text-gray-600">
                  Friendly Learning Path
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="text-3xl font-extrabold text-green-600">
                  Real
                </h3>

                <p className="mt-2 text-gray-600">
                  Coding Projects & Practice
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl opacity-20 rounded-[40px]"></div>

            <div className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden border">

              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                alt="Student learning C++ programming online"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* WHAT STUDENTS LEARN */}
      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-4xl mx-auto">

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              What Students Learn
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Our structured C++ curriculum helps students master coding
              concepts step-by-step with practical examples and projects.
            </p>

          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Programming Basics",
              "Loops & Conditions",
              "Functions & Arrays",
              "Object-Oriented Programming",
              "Problem Solving",
              "Algorithms & Logic",
              "Competitive Coding",
              "Project Building",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white p-6 rounded-3xl border shadow-sm hover:shadow-lg transition"
              >

                <div className="text-4xl">
                  🚀
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 py-20 bg-white">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Why Choose Bright Edu?
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We focus on practical coding skills, confidence building,
            and personalized attention for every student.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            <div className="p-8 rounded-3xl bg-blue-50 border">
              <div className="text-5xl">👨‍🏫</div>

              <h3 className="mt-5 text-2xl font-bold">
                Expert Tutors
              </h3>

              <p className="mt-4 text-gray-600">
                Learn from experienced programming mentors who simplify coding concepts.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-purple-50 border">
              <div className="text-5xl">💡</div>

              <h3 className="mt-5 text-2xl font-bold">
                Interactive Classes
              </h3>

              <p className="mt-4 text-gray-600">
                Live coding sessions with hands-on exercises and real projects.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-green-50 border">
              <div className="text-5xl">🌍</div>

              <h3 className="mt-5 text-2xl font-bold">
                Global Learning
              </h3>

              <p className="mt-4 text-gray-600">
                Flexible online classes for students in the USA and worldwide.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-24">

        <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] p-12 text-white shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Start Your Coding Journey Today 🚀
          </h2>

          <p className="mt-6 text-xl text-white/90">
            Join personalized online C++ classes designed to build coding confidence and real programming skills.
          </p>

          <a
            href="https://tally.so/r/q4oe18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-10 bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition">
              Book Free Demo Class
            </button>
          </a>

        </div>

      </section>

    </main>
  );
}
