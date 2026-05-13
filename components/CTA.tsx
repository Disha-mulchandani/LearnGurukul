import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28 px-6 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-6xl font-extrabold leading-tight">
          Start Your Learning Journey Today
        </h2>

        <p className="mt-8 text-2xl text-white/90">
          Join interactive online classes designed for modern students worldwide.
        </p>

        <Link href="/student-enrollment">

          <button className="mt-12 bg-white text-blue-700 px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition">
            Book Free Demo
          </button>

        </Link>

      </div>

    </section>
  );
}