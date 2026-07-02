import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online English Speaking Classes | LearnGurukul",

  description:
    "Improve English speaking skills with 1:1 online classes. Learn fluency, pronunciation, grammar, vocabulary, and communication skills with expert tutors for students worldwide.",

  keywords: [
    "online english speaking classes",
    "spoken english online tutor",
    "english speaking practice online",
    "english fluency classes",
    "english communication skills",
    "1 to 1 english tutor",
    "english speaking course for kids",
    "learn english online",
    "online english classes for students",
    "english grammar and speaking",
  ],
};

export default function EnglishSpeakingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff7fb] via-white to-[#f5f8ff] px-6 py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <div className="text-center max-w-5xl mx-auto">

          <p className="text-pink-600 font-bold tracking-[4px] uppercase">
            LearnGurukul English Speaking Classes
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Online English Speaking Classes
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed">
            Personalized one-to-one English speaking classes designed to improve
            fluency, pronunciation, vocabulary, grammar, and communication skills
            for students worldwide.
          </p>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">
            <h2 className="text-5xl font-extrabold text-pink-600">1:1</h2>
            <p className="mt-4 text-gray-600 font-semibold">Personalized Classes</p>
          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">
            <h2 className="text-5xl font-extrabold text-blue-600">Live</h2>
            <p className="mt-4 text-gray-600 font-semibold">Interactive Sessions</p>
          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">
            <h2 className="text-5xl font-extrabold text-purple-600">Global</h2>
            <p className="mt-4 text-gray-600 font-semibold">Students Worldwide</p>
          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">
            <h2 className="text-5xl font-extrabold text-rose-600">Fluent</h2>
            <p className="mt-4 text-gray-600 font-semibold">Communication Skills</p>
          </div>

        </div>

        {/* WHAT STUDENTS LEARN */}
        <div className="mt-32">

          <div className="text-center">

            <h2 className="text-5xl font-extrabold text-gray-900">
              What Students Learn
            </h2>

            <p className="mt-6 text-xl text-gray-600">
              Structured English speaking training for real-world communication.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-20">

            <div className="bg-white rounded-[35px] p-10 shadow-xl">
              <h3 className="text-3xl font-extrabold text-pink-700">
                Spoken English Fluency
              </h3>
              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Improve speaking confidence, sentence formation,
                pronunciation, and conversational skills through live practice.
              </p>
            </div>

            <div className="bg-white rounded-[35px] p-10 shadow-xl">
              <h3 className="text-3xl font-extrabold text-blue-700">
                Vocabulary Building
              </h3>
              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Learn new words, expressions, and real-life communication vocabulary.
              </p>
            </div>

            <div className="bg-white rounded-[35px] p-10 shadow-xl">
              <h3 className="text-3xl font-extrabold text-purple-700">
                Grammar Improvement
              </h3>
              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Strengthen grammar, sentence structure, and writing accuracy.
              </p>
            </div>

            <div className="bg-white rounded-[35px] p-10 shadow-xl">
              <h3 className="text-3xl font-extrabold text-rose-700">
                Confidence & Speaking Skills
              </h3>
              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Build confidence for interviews, presentations, and daily communication.
              </p>
            </div>

          </div>

        </div>

        {/* WHY CHOOSE */}
        <div className="mt-32 bg-white rounded-[40px] shadow-2xl p-12 md:p-16">

          <div className="text-center max-w-5xl mx-auto">

            <h2 className="text-5xl font-extrabold text-gray-900">
              Why Choose LearnGurukul
            </h2>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              We focus on personalized learning, real communication practice,
              and confidence building through interactive sessions.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            <div>
              <h3 className="text-2xl font-extrabold text-gray-800">
                1:1 Personal Attention
              </h3>
              <p className="mt-4 text-gray-600">
                Every student gets individual focus and customized learning.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-gray-800">
                Interactive Practice
              </h3>
              <p className="mt-4 text-gray-600">
                Real speaking practice sessions instead of theory-only learning.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-gray-800">
                Flexible Online Classes
              </h3>
              <p className="mt-4 text-gray-600">
                Learn from anywhere with flexible scheduling.
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}