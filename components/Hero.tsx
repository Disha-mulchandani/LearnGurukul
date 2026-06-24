export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0B1120] flex items-center justify-center px-6 pt-28 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">

          {/* TRUST BADGE */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm text-gray-200 shadow-lg">
            ⭐ Trusted 1:1 Online Tutoring Platform for Students Worldwide
          </div>

          {/* MAIN HEADING (SEO STRONG) */}
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Personalized{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              1:1 Online Tutoring
            </span>
            <br />
            for Coding, Math, Science & English
          </h1>

          {/* SUBTEXT (SEO KEYWORDS HEAVY BUT NATURAL) */}
          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Bright Edu provides expert-led 1:1 online tutoring for students worldwide.
            We help you master Coding, Python, Math, Science, English, and Creative Writing
            with personalized live classes designed to improve understanding and confidence.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            {/* PRIMARY CTA */}
            <a
              href="https://tally.so/r/q4oe18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition duration-300 shadow-2xl">
                🎓 Book Free Demo Class
              </button>
            </a>

            {/* SECONDARY CTA */}
            <a href="/courses">
              <button className="bg-white/5 border border-white/10 backdrop-blur-md px-8 py-4 rounded-2xl text-lg text-white hover:bg-white hover:text-black transition duration-300">
                📚 Explore Courses
              </button>
            </a>

          </div>

          {/* STATS */}
          <div className="mt-14 flex gap-10">

            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-400 mt-1">Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-gray-400 mt-1">Expert Tutors</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">4.9★</h3>
              <p className="text-gray-400 mt-1">Rating</p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[40px] blur-2xl opacity-30"></div>

          {/* CARD */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-5 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4"
              alt="Online 1:1 tutoring session for students learning coding and math"
              className="rounded-[30px] w-full object-cover"
            />

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -left-6 bg-white text-black px-6 py-4 rounded-2xl shadow-2xl">

              <p className="font-bold text-lg">
                Live 1:1 Personalized Learning
              </p>

              <p className="text-gray-600 text-sm mt-1">
                Coding • Math • Science • English
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
