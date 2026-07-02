import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "English Tutoring Online | 1:1 English Classes, Grammar, Writing & Speaking | LearnGurukul",

  description:
    "Improve English skills with 1:1 online tutoring. Learn grammar, reading, writing, vocabulary, and speaking with expert tutors for USA & global students. Personalized English classes for school students worldwide.",

  keywords: [
    "online english tutor",
    "english tutoring online",
    "1 to 1 english classes",
    "english tutor for kids",
    "english grammar classes online",
    "reading comprehension tutor",
    "writing classes online",
    "english speaking practice",
    "communication skills training",
    "english tutor usa",
    "online english classes for students",
    "creative writing tutor",
    "english improvement classes",
    "learn english online",
    "LearnGurukul english classes",
  ],
};

export default function EnglishTutoringPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-pink-50 px-6 py-28">

      {/* HERO */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <p className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-5 py-2 rounded-full font-semibold text-sm">
            🌍 1:1 Online English Tutoring for USA & Global Students
          </p>

          {/* H1 */}
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Master{" "}
            <span className="text-pink-600">English Skills</span>{" "}
            with Online 1:1 Tutoring
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Learn English grammar, reading comprehension, writing skills,
            vocabulary, and spoken English through personalized one-to-one
            online classes designed for school students and beginners.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <a
              href="https://tally.so/r/q4oe18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl">
                Book Free Demo
              </button>
            </a>

            <Link href="/courses">
              <button className="border-2 border-pink-600 text-pink-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-pink-600 hover:text-white transition">
                Explore Courses
              </button>
            </Link>

          </div>

          {/* SEO TRUST POINTS */}
          <div className="mt-10 grid grid-cols-2 gap-4 text-gray-600">
            <p>✔ 1:1 Personalized Classes</p>
            <p>✔ Expert English Tutors</p>
            <p>✔ Reading & Writing Focus</p>
            <p>✔ Global Student Support</p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="relative">

          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-[40px] blur-2xl opacity-30"></div>

          <div className="relative bg-white rounded-[40px] shadow-2xl p-10 border">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              English Learning Skills
            </h2>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-pink-50 rounded-3xl p-6">
                <h3 className="text-2xl font-bold text-pink-600">Grammar</h3>
                <p className="text-gray-600 mt-2">Sentence structure & rules</p>
              </div>

              <div className="bg-rose-50 rounded-3xl p-6">
                <h3 className="text-2xl font-bold text-rose-600">Reading</h3>
                <p className="text-gray-600 mt-2">Comprehension skills</p>
              </div>

              <div className="bg-purple-50 rounded-3xl p-6">
                <h3 className="text-2xl font-bold text-purple-600">Writing</h3>
                <p className="text-gray-600 mt-2">Essays & creativity</p>
              </div>

              <div className="bg-orange-50 rounded-3xl p-6">
                <h3 className="text-2xl font-bold text-orange-600">Speaking</h3>
                <p className="text-gray-600 mt-2">Fluency & confidence</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY SECTION (SEO BOOST) */}
      <section className="mt-32 max-w-7xl mx-auto">

        <div className="text-center">

          <h2 className="text-5xl font-extrabold text-gray-900">
            Why Parents Choose Our English Tutoring
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We help students build strong English communication skills
            for school success, exams, and real-world confidence.
          </p>

        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-[35px] p-10 shadow-xl border">
            <h3 className="text-3xl font-bold">Personalized Learning</h3>
            <p className="mt-4 text-gray-600">
              Every student gets a customized English learning plan.
            </p>
          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl border">
            <h3 className="text-3xl font-bold">Improve Confidence</h3>
            <p className="mt-4 text-gray-600">
              Focus on speaking and communication skills.
            </p>
          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl border">
            <h3 className="text-3xl font-bold">Exam Success</h3>
            <p className="mt-4 text-gray-600">
              Improve grades in school English exams.
            </p>
          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="mt-32">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-600 to-rose-500 rounded-[40px] p-14 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-extrabold">
            Start English Learning Today 🚀
          </h2>

          <p className="mt-6 text-lg text-white/90">
            Join 1:1 online English classes and improve your speaking, writing, and grammar.
          </p>

          <a
            href="https://tally.so/r/q4oe18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-10 bg-white text-pink-600 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition">
              Book Free Demo
            </button>
          </a>

        </div>

      </section>

    </main>
  );
}
