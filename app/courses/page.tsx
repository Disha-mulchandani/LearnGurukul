import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Online Tutoring Courses for English, Math, Coding & Science | LearnGurukul",

  description:
    "Explore 1:1 online tutoring courses for English, Math, Science, Coding, SAT preparation, Creative Writing, Reading, and Homework Help for students in USA, UK, India, Canada, Australia and worldwide.",

  keywords: [
    "online tutoring courses",
    "1:1 online tutoring",
    "online english classes",
    "online math tutor",
    "science tutoring online",
    "coding classes online",
    "python programming classes",
    "java programming classes",
    "c++ programming classes",
    "algebra tutoring online",
    "sat math tutor",
    "creative writing classes",
    "reading comprehension tutor",
    "homework help online",
    "online tutoring USA",
    "online tutoring UK",
    "online tutoring India",
    "online tutoring Canada",
    "online tutoring Australia",
    "online tutoring Africa",
    "IB tutoring online",
    "CBSE tutoring online",
    "ICSE tutoring online",
  ],

  openGraph: {
    title:
      "Online Tutoring Courses | English, Math, Coding & Science | LearnGurukul",

    description:
      "Explore personalized 1:1 online tutoring courses for students worldwide including English, Math, Science, Coding and SAT preparation.",

    siteName: "LearnGurukul",
    type: "website",
  },
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7ff] via-[#fff8fb] to-[#eef6ff] px-6 py-28">

      {/* HERO SECTION */}
      <div className="text-center max-w-5xl mx-auto">

        <div className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-bold text-sm">
          1:1 Personalized Online Tutoring for Students Worldwide
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          Online Tutoring Courses
          <span className="block text-blue-600">
            English, Math, Coding & Science
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Learn with expert tutors through interactive 1:1 online classes.
          Choose from English, Math, Science, Coding, SAT Preparation,
          Creative Writing, Reading, and Homework Help.
        </p>

        <Link
          href="/student-enrollment"
          className="inline-block mt-10 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 transition"
        >
          Book Free Demo Class
        </Link>

      </div>

      {/* CATEGORY SECTION */}
      <section className="max-w-7xl mx-auto mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {[
          {
            title: "English Tutoring",
            desc: "Improve speaking, grammar, writing, vocabulary and communication skills.",
            color: "from-pink-500 to-rose-400",
          },
          {
            title: "Math Tutoring",
            desc: "Learn algebra, geometry, SAT math, and problem solving step-by-step.",
            color: "from-blue-500 to-indigo-500",
          },
          {
            title: "Coding Classes",
            desc: "Learn Python, Java, C++ and programming fundamentals with projects.",
            color: "from-cyan-500 to-blue-500",
          },
          {
            title: "Science Tutoring",
            desc: "Understand Physics, Chemistry, Biology with clear explanations.",
            color: "from-green-500 to-emerald-400",
          },
          {
            title: "SAT Preparation",
            desc: "Focused SAT Math and English practice with exam strategies.",
            color: "from-purple-500 to-indigo-500",
          },
          {
            title: "Creative Writing",
            desc: "Improve storytelling, imagination, essays and writing skills.",
            color: "from-orange-500 to-yellow-400",
          },
        ].map((course, i) => (
          <div
            key={i}
            className="relative group rounded-[30px] overflow-hidden shadow-xl bg-white border"
          >
            <div className={`h-3 bg-gradient-to-r ${course.color}`}></div>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {course.title}
              </h2>

              <p className="mt-4 text-gray-600">
                {course.desc}
              </p>
            </div>
          </div>
        ))}

      </section>

      {/* SEO SECTION */}
      <section className="max-w-6xl mx-auto mt-28 bg-white rounded-[40px] shadow-xl p-10 md:p-16">

        <h2 className="text-4xl font-extrabold text-gray-900">
          Personalized Online Learning for Every Student
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          LearnGurukul provides 1:1 online tutoring for students worldwide.
          Our expert tutors help students improve academic performance,
          build confidence, and master key subjects like English, Math,
          Science, Coding, and SAT preparation.
        </p>

        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          We support USA, UK, India, Canada, Australia, and international
          curriculums including IB, CBSE, ICSE, and Cambridge programs.
        </p>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto mt-24 mb-10 text-center">

        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-[40px] p-12 text-white">

          <h2 className="text-4xl font-extrabold">
            Start Learning with Expert Tutors 🚀
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            Book a free demo class and start your personalized learning journey today.
          </p>

          <Link
            href="/student-enrollment"
            className="inline-block mt-10 bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition"
          >
            Book Free Demo
          </Link>

        </div>

      </section>

    </main>
  );
}