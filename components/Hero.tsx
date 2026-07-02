export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0B1120] flex items-center justify-center px-6 pt-28 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="text-white">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm text-gray-200">
            ⭐ Trusted 1:1 Online Tutoring Platform
          </div>

          {/* TITLE */}
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
            Personalized{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              1:1 Online Tutoring
            </span>
            <br />
            for Coding, Math & English
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Expert-led live tutoring for students worldwide. Learn Python, Coding,
            Math, Science, English, and Creative Writing with personalized guidance
            to improve skills and confidence.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <a
              href="https://tally.so/r/q4oe18"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition duration-300 shadow-2xl text-center"
            >
              🎓 Book Free Demo Class
            </a>

            <a
              href="/courses"
              className="bg-white/5 border border-white/10 backdrop-blur-md px-8 py-4 rounded-2xl text-lg text-white hover:bg-white hover:text-black transition duration-300 text-center"
            >
              📚 Explore Courses
            </a>

          </div>

          {/* STATS (REALISTIC) */}
          <div className="mt-14 text-gray-300">

            <p className="text-lg font-semibold">
              100+ classes conducted successfully
            </p>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative">

          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[40px] blur-2xl opacity-30"></div>

          {/* IMAGE CARD */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-5 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4"
              alt="Student learning coding and math in online 1:1 tutoring session"
              className="rounded-[30px] w-full object-cover"
            />

            {/* FLOAT CARD */}
            <div className="absolute -bottom-6 -left-6 bg-white text-black px-6 py-4 rounded-2xl shadow-2xl">

              <p className="font-bold text-lg">
                Live 1:1 Learning
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