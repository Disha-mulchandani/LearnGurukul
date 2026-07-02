import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-blue-600 text-white">

      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Personalized Online Tutoring for Students Worldwide
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
          Learn Math, SAT, Science, Coding, English, and more through
          interactive one-to-one online classes designed for global students.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/student-enrollment"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition"
          >
            Book Free Demo
          </Link>

          <Link
            href="/courses"
            className="border border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-700 transition"
          >
            Explore Courses
          </Link>

        </div>

        {/* FOOT NOTE */}
        <p className="mt-8 text-sm text-white/80 uppercase tracking-wider">
          Supporting USA • UK • Canada • UAE • International Students
        </p>

      </div>
    </section>
  );
}