import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Best Online English & Creative Writing Classes for Students | Bright Edu",

  description:
    "Discover personalized 1:1 online English and Creative Writing classes for students worldwide. Improve reading, vocabulary, grammar, storytelling, and communication skills with Bright Edu.",

  keywords: [
    "online english tutor",
    "creative writing classes",
    "english classes online",
    "reading comprehension tutor",
    "essay writing classes",
    "english speaking classes",
    "vocabulary improvement",
    "writing skills for kids",
    "online tutoring USA",
    "1:1 online tutoring",
    "english grammar classes",
    "story writing classes",
    "communication skills for students",
    "Bright Edu",
  ],
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f8fbff] px-6 py-24">

      <div className="max-w-4xl mx-auto">

        {/* HERO */}
        <div className="text-center">

          <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold text-sm">
            English Learning • Creative Writing • Reading Skills
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Best Online English & Creative Writing Classes for Students
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Personalized 1:1 online English tutoring and creative writing
            classes designed to help students improve reading,
            grammar, vocabulary, storytelling, and communication skills.
          </p>

        </div>

        
        {/* INTRO */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold text-gray-900">
            Why English & Writing Skills Matter
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Strong English communication and writing skills help students
            succeed academically and confidently express their ideas.
            From reading comprehension and essay writing to storytelling
            and public speaking, these skills are essential for school,
            future careers, and everyday communication.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-blue-700">Bright Edu</span>,
            students from the USA and worldwide receive personalized online
            tutoring that focuses on creativity, confidence, vocabulary growth,
            grammar improvement, and communication development.
          </p>

        </section>

        {/* BENEFITS */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold text-gray-900">
            Benefits of 1:1 Online English Tutoring
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-white p-8 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold text-blue-700">
                📚 Reading Comprehension
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Improve reading fluency, understanding, vocabulary,
                and critical thinking skills through guided lessons.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold text-purple-700">
                ✍️ Creative Writing
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Learn storytelling, descriptive writing, essay writing,
                and imaginative thinking with engaging activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold text-pink-700">
                🎤 Communication Skills
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Build confidence in speaking, presentations,
                pronunciation, and conversational English.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold text-green-700">
                🌍 Global Learning
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Flexible online classes available for students
                in the USA, UK, Canada, UAE, India, and worldwide.
              </p>
            </div>

          </div>

        </section>

        {/* WHY PARENTS */}
        <section className="mt-16 bg-white p-10 rounded-[35px] shadow-sm border">

          <h2 className="text-3xl font-bold text-gray-900">
            Why Parents Choose Bright Edu
          </h2>

          <ul className="mt-8 space-y-4 text-lg text-gray-700">

            <li>
              ✅ Personalized 1:1 online tutoring sessions
            </li>

            <li>
              ✅ Experienced English and Creative Writing tutors
            </li>

            <li>
              ✅ Flexible schedules for global students
            </li>

            <li>
              ✅ Interactive and engaging lessons
            </li>

            <li>
              ✅ Focus on confidence, creativity, and communication
            </li>

          </ul>

        </section>

        {/* RELATED COURSES */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold text-gray-900">
            Explore Related Courses
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <Link
              href="/creative-writing-classes"
              className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-purple-700">
                ✍️ Creative Writing Classes
              </h3>

              <p className="mt-4 text-gray-600">
                Improve storytelling, imagination, and writing confidence.
              </p>
            </Link>

            <Link
              href="/online-english-classes"
              className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-700">
                📖 Online English Classes
              </h3>

              <p className="mt-4 text-gray-600">
                Learn grammar, vocabulary, speaking, and reading skills.
              </p>
            </Link>

          </div>

        </section>

        {/* FAQ */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-8">

            <div>
              <h3 className="text-xl font-bold text-blue-600">
                Are classes personalized?
              </h3>

              <p className="mt-3 text-gray-700">
                Yes, all Bright Edu classes are personalized according
                to each student’s level, goals, and learning style.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-600">
                Which age groups do you teach?
              </h3>

              <p className="mt-3 text-gray-700">
                We teach students from elementary school to high school.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-600">
                Do you teach international students?
              </h3>

              <p className="mt-3 text-gray-700">
                Yes, we teach students from the USA, Canada, UK,
                UAE, Singapore, India, and other countries.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-[35px] text-white">

          <h2 className="text-4xl font-extrabold">
            Help Your Child Become a Confident Reader & Writer
          </h2>

          <p className="mt-6 text-xl text-white/90">
            Book a free demo class and start personalized English learning today.
          </p>

          <Link
            href="/student-enrollment"
            className="inline-block mt-8 bg-white text-blue-700 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition"
          >
            Book Free Demo Class
          </Link>

        </div>

      </div>

    </main>
  );
}
