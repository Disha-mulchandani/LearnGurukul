import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28 px-6 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Personalized Online Tutoring for Students Worldwide
        </h2>

        <p className="mt-8 text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          Learn Math, SAT, Science, Coding, English, and more through
          interactive one-to-one online classes designed for students
          in the USA and around the world.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <Link href="/student-enrollment">

            <button className="bg-white text-blue-700 px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition shadow-xl">
              Book Free Demo
            </button>

          </Link>

          <Link href="/courses">

            <button className="border-2 border-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-blue-700 transition">
              Explore Courses
            </button>

          </Link>

        </div>

        <p className="mt-8 text-white/80 text-sm tracking-wide uppercase">
          Supporting USA, UK, Canada, UAE & International Students
        </p>

      </div>

    </section>
  );
}
