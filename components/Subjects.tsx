export default function Subjects() {

  const subjects = [
    {
      name: "English",
      emoji: "📚",
      color: "from-pink-400 to-rose-400",
    },
    {
      name: "Creative Writing",
      emoji: "✍️",
      color: "from-purple-400 to-indigo-400",
    },
    {
      name: "Python",
      emoji: "💻",
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Java",
      emoji: "☕",
      color: "from-orange-400 to-yellow-400",
    },
    {
      name: "C++",
      emoji: "🚀",
      color: "from-gray-600 to-gray-400",
    },
    {
      name: "AP Computer Science",
      emoji: "🧠",
      color: "from-green-400 to-emerald-400",
    },
    {
      name: "Physics",
      emoji: "⚡",
      color: "from-indigo-400 to-blue-400",
    },
    {
      name: "Biology",
      emoji: "🧬",
      color: "from-lime-400 to-green-400",
    },
    {
      name: "Hindi",
      emoji: "🌸",
      color: "from-red-400 to-pink-400",
    },
    {
      name: "Gujarati",
      
      color: "from-yellow-400 to-orange-400",
    },
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-[#fff7fb] via-[#f7f9ff] to-[#eef6ff] overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-md text-pink-600 font-bold text-sm">
            Explore Fun Learning
          </div>

          <h2 className="mt-8 text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Popular Subjects
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Exciting live online classes designed to make learning
            creative, interactive, and enjoyable for students.
          </p>

        </div>

        {/* SUBJECTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {subjects.map((subject) => (

            <div
              key={subject.name}
              className="group relative"
            >

              {/* GLOW */}
              <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} rounded-[35px] blur-2xl opacity-30 group-hover:opacity-50 transition duration-500`}>
              </div>

              {/* CARD */}
              <div className="relative bg-white rounded-[35px] p-8 shadow-xl hover:-translate-y-3 hover:rotate-1 transition duration-300 border border-white/50">

                {/* EMOJI */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-4xl shadow-lg`}>
                  {subject.emoji}
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-3xl font-extrabold text-gray-800">
                  {subject.name}
                </h3>

                {/* TEXT */}
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  Fun interactive classes with engaging lessons,
                  creative activities, and personalized guidance.
                </p>

                {/* BUTTON */}
                <button className={`mt-8 bg-gradient-to-r ${subject.color} text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition`}>
                  Start Learning
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}