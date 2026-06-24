import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "About Bright Edu | 1:1 Online Tutoring for Math, English, SAT & Coding",

  description:
    "Bright Edu provides personalized 1:1 online tutoring for students worldwide. Expert tutors for Math, English, Reading, Creative Writing, SAT Prep, Science, Coding, and homework help.",

  keywords: [
    "about Bright Edu",
    "online tutoring platform",
    "1:1 online tutoring",
    "math tutor online",
    "english tutor online",
    "SAT tutoring",
    "coding classes online",
    "creative writing classes",
    "reading tutor online",
    "science tutoring",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 px-6 py-28 text-white">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">

          <div className="inline-block bg-white/10 border border-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold">
            Trusted Online Tutoring for Students Worldwide
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
            Helping Students Learn
            <span className="block text-yellow-300">
              With Confidence
            </span>
          </h1>

          <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Bright Edu is a modern 1:1 online tutoring platform helping students
            worldwide succeed in Math, English, SAT Preparation, Coding,
            Science, Reading, and Creative Writing through personalized live learning.
          </p>

        </div>

      </section>

      {/* OUR STORY */}
      <section className="px-6 py-24">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-blue-600 font-bold uppercase tracking-widest">
              Our Story
            </p>

            <h2 className="mt-4 text-5xl font-extrabold text-gray-900 leading-tight">
              Personalized Learning
              for Modern Students
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Bright Edu was created with a simple goal:
              make high-quality personalized education accessible
              to students worldwide.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We believe every student learns differently.
              That’s why our live 1:1 classes focus on building
              understanding, confidence, creativity, and academic growth.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              From Math and SAT preparation to English communication,
              Coding, Reading, and Creative Writing,
              our expert tutors help students develop skills
              that go beyond school exams.
            </p>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-blue-50 p-10 rounded-3xl">
              <h3 className="text-5xl font-extrabold text-blue-700">
                50+
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Students Learning Worldwide
              </p>
            </div>

            

            <div className="bg-pink-50 p-10 rounded-3xl">
              <h3 className="text-5xl font-extrabold text-pink-700">
                1:1
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Personalized Learning
              </p>
            </div>

            <div className="bg-green-50 p-10 rounded-3xl">
              <h3 className="text-5xl font-extrabold text-green-700">
                Global
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                USA ,Uk and other countries
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY PARENTS CHOOSE US */}
      <section className="bg-gray-50 px-6 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-bold uppercase tracking-widest">
              Why Parents Choose Bright Edu
            </p>

            <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
              Designed for Student Success
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              "Personalized 1:1 live tutoring",
              "Flexible scheduling for global students",
              "Expert tutors with interactive teaching",
              "Homework help & concept clarity",
              "SAT, Math, English & Coding support",
              "Confidence-focused learning environment",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border"
              >
              

                <p className="mt-6 text-lg font-semibold text-gray-800 leading-relaxed">
                  {item}
                </p>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TEACHING APPROACH */}
      <section className="px-6 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-bold uppercase tracking-widest">
              Our Teaching Approach
            </p>

            <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
              How Learning Works
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            {[
              {
                number: "01",
                title: "Assess",
                text: "We understand the student’s level, goals, and learning style.",
              },
              {
                number: "02",
                title: "Personalize",
                text: "Customized lessons designed around student needs.",
              },
              {
                number: "03",
                title: "Teach",
                text: "Interactive live classes with expert tutors.",
              },
              {
                number: "04",
                title: "Improve",
                text: "Track progress and build long-term confidence.",
              },
            ].map((step, index) => (

              <div
                key={index}
                className="bg-white border rounded-3xl p-8"
              >
                <div className="text-5xl font-extrabold text-blue-100">
                  {step.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-28">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-700 to-purple-700 rounded-[40px] p-14 text-center text-white">

          <h2 className="text-5xl font-extrabold leading-tight">
            Start Your Learning Journey Today
          </h2>

          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            Book a free demo class and experience personalized online learning
            designed to help students succeed confidently.
          </p>

          <Link
            href="/student-enrollment"
            className="inline-block mt-10 bg-white text-blue-700 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition"
          >
            Book Free Demo
          </Link>

        </div>

      </section>

    </main>
  );
}
