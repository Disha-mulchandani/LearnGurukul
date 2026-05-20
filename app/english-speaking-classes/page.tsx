export const metadata = {
  title: "Online English Speaking Classes | LearnAtHome",
  description:
    "Interactive online English speaking classes for students worldwide with personalized one-to-one tutoring.",
};

export default function EnglishSpeakingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff7fb] via-white to-[#f5f8ff] px-6 py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <div className="text-center max-w-5xl mx-auto">

          <p className="text-pink-600 font-bold tracking-[4px] uppercase">
            English Speaking Classes
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Online English Speaking Classes
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed">
            Personalized one-to-one English speaking classes designed
            to improve fluency, grammar, vocabulary, pronunciation,
            communication skills, and speaking confidence for students worldwide.
          </p>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">

            <h2 className="text-5xl font-extrabold text-pink-600">
              1:1
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Personalized Classes
            </p>

          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">

            <h2 className="text-5xl font-extrabold text-blue-600">
              Live
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Interactive Sessions
            </p>

          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">

            <h2 className="text-5xl font-extrabold text-purple-600">
              Global
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Students Worldwide
            </p>

          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">

            <h2 className="text-5xl font-extrabold text-rose-600">
              Fluent
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Communication Skills
            </p>

          </div>

        </div>

        {/* WHAT STUDENTS LEARN */}
        <div className="mt-32">

          <div className="text-center">

            <h2 className="text-5xl font-extrabold text-gray-900">
              What Students Learn
            </h2>

            <p className="mt-6 text-xl text-gray-600">
              Structured English speaking lessons focused on
              communication, fluency, and confidence building.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-20">

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-pink-700">
                Spoken English
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Improve speaking fluency, sentence formation,
                pronunciation, and conversational confidence through
                live interactive discussions and activities.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-blue-700">
                Vocabulary Building
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Learn advanced vocabulary, expressive language,
                descriptive words, and practical communication
                skills for real-world conversations.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-purple-700">
                Grammar & Writing
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Strengthen grammar, sentence structure,
                punctuation, and writing clarity through
                personalized practice and guidance.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-rose-700">
                Public Speaking Confidence
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Build confidence in presentations, discussions,
                storytelling, and communication through engaging
                speaking activities and mentorship.
              </p>

            </div>

          </div>

        </div>

        {/* WHY CHOOSE */}
        <div className="mt-32 bg-white rounded-[40px] shadow-2xl p-12 md:p-16">

          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-5xl font-extrabold text-gray-900">
              Why Choose LearnAtHome
            </h2>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Our English speaking classes combine personalized teaching,
              engaging communication practice, and supportive mentorship
              to help students become confident English speakers.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            <div>

              <h3 className="text-2xl font-extrabold text-gray-800">
                Personalized Attention
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                One-to-one classes tailored to each student’s
                communication level and learning goals.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-extrabold text-gray-800">
                Interactive Learning
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Live discussions, storytelling activities,
                speaking exercises, and engaging communication practice.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-extrabold text-gray-800">
                Flexible Online Classes
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Learn comfortably from anywhere with flexible
                schedules designed for modern students worldwide.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}