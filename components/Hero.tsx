export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600 flex items-center justify-center px-6 pt-24 relative overflow-hidden">

      {/* Background Blur Circles */}
      <div className="absolute w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20 top-10 left-10"></div>

      <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <div className="relative z-10 text-center text-white max-w-5xl">

        <div className="inline-block bg-white/20 px-6 py-3 rounded-full text-sm backdrop-blur-md border border-white/20">
          Trusted by Students Worldwide
        </div>

        <h1 className="mt-10 text-5xl md:text-6xl font-extrabold leading-tight">
          Learn Smarter
          <br />
          From Anywhere
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Interactive online classes for English, Coding,
          Creative Writing, Science and AP Computer Science.
        </p>

       <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">

  {/* BOOK FREE DEMO */}
  <a
    href="https://tally.so/r/q4oe18"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-white text-blue-700 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition shadow-xl">
      Book Free Demo
    </button>
  </a>

  {/* EXPLORE COURSES */}
  <a href="/courses">
    <button className="bg-black/20 border border-white/30 px-10 py-5 rounded-2xl text-lg hover:bg-white hover:text-black transition">
      Explore Courses
    </button>
  </a>

</div>

      </div>
    <div className="mt-16 flex justify-center">

  <div className="relative w-full max-w-3xl">

    {/* BLUE PURPLE BACKGROUND */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl rotate-2"></div>

    {/* IMAGE CARD */}
    <div className="relative bg-white rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300">

      <img
  src="https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4"
  alt="Student attending online class with laptop"
  className="rounded-2xl w-full object-cover"
/>

      <p className="text-center mt-4 font-semibold text-gray-700">
        Learn from Anywhere • Live Online Classes
      </p>

    </div>

  </div>

</div>
    </section>
  );
}