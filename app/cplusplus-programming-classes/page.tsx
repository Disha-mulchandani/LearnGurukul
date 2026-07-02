import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online C++ Programming Classes for Kids & Beginners | LearnGurukul",

  description:
    "Learn C++ programming online with personalized 1:1 tutoring. Build coding logic, problem-solving skills, algorithms, and programming confidence through interactive live classes for students worldwide.",

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

    // 🌍 SEO expansion
    "online programming classes",
    "computer science tutoring",
    "coding classes online USA UK India",
    "learn programming languages",
    "software development basics",

    // 💻 related programming languages
    "Python programming classes",
    "Java programming classes",
    "JavaScript coding classes"
  ],

  openGraph: {
    title: "Online C++ Programming Classes | LearnGurukul",
    description:
      "Interactive 1:1 C++ programming classes for beginners and school students worldwide.",
    siteName: "LearnGurukul",
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
              💻 Interactive Coding Classes by LearnGurukul
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
              Online{" "}
              <span className="text-blue-600">C++ Programming</span>{" "}
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
                <h3 className="text-3xl font-extrabold text-blue-600">1:1</h3>
                <p className="mt-2 text-gray-600">Personalized Live Classes</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="text-3xl font-extrabold text-purple-600">Beginner</h3>
                <p className="mt-2 text-gray-600">Friendly Learning Path</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="text-3xl font-extrabold text-green-600">Projects</h3>
                <p className="mt-2 text-gray-600">Real Coding Practice</p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl opacity-20 rounded-[40px]"></div>

            <div className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden border">

              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                alt="C++ programming class LearnGurukul"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* WHAT STUDENTS LEARN */}
      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            What Students Learn
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Step-by-step structured C++ programming course for beginners.
          </p>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Programming Basics",
              "Loops & Conditions",
              "Functions & Arrays",
              "Object-Oriented Programming",
              "Problem Solving",
              "Algorithms & Logic",
              "Competitive Coding",
              "Mini Projects",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl border shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl">🚀</div>
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
            Why Choose LearnGurukul?
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We focus on practical coding skills, logic building, and real projects.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            <div className="p-8 rounded-3xl bg-blue-50 border">
              <h3 className="text-2xl font-bold">Expert Tutors</h3>
              <p className="mt-4 text-gray-600">
                Simplified coding learning with expert guidance.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-purple-50 border">
              <h3 className="text-2xl font-bold">Interactive Classes</h3>
              <p className="mt-4 text-gray-600">
                Live coding practice and real-time problem solving.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-green-50 border">
              <h3 className="text-2xl font-bold">Global Learning</h3>
              <p className="mt-4 text-gray-600">
                Students from USA, UK, India, Canada & more.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-24">

        <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] p-12 text-white shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Start Coding Journey Today 🚀
          </h2>

          <p className="mt-6 text-xl text-white/90">
            Join LearnGurukul C++ classes and become a confident programmer.
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