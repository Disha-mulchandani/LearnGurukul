import Link from "next/link";

export default function Subjects() {
  const subjects = [
    {
      name: "English Tutoring",
      emoji: "📚",
      color: "from-pink-400 to-rose-400",
      link: "/english-tutoring",
    },
    {
      name: "Creative Writing",
      emoji: "✍️",
      color: "from-purple-400 to-indigo-400",
      link: "/creative-writing-classes",
    },
    {
      name: "SAT Math",
      emoji: "🎯",
      color: "from-blue-500 to-indigo-500",
      link: "/sat-math-preparation",
    },
    {
      name: "Python Programming",
      emoji: "💻",
      color: "from-blue-400 to-cyan-400",
      link: "/online-python-classes",
    },
    {
      name: "Java Programming",
      emoji: "☕",
      color: "from-orange-400 to-yellow-400",
      link: "/java-programming-classes",
    },
    {
      name: "Homework Help",
      emoji: "🧠",
      color: "from-green-500 to-emerald-400",
      link: "/homework-help-online",
    },
    {
      name: "AP Computer Science",
      emoji: "🚀",
      color: "from-cyan-500 to-blue-500",
      link: "/ap-computer-science-tutor",
    },
    {
      name: "Physics",
      emoji: "⚡",
      color: "from-indigo-400 to-blue-400",
      link: "/online-physics-classes",
    },
    {
      name: "Biology",
      emoji: "🧬",
      color: "from-lime-400 to-green-400",
      link: "/online-biology-classes",
    },
    {
      name: "Hindi",
      emoji: "🌸",
      color: "from-red-400 to-pink-400",
      link: "/online-hindi-classes",
    },
    {
      name: "Gujarati",
      emoji: "🎓",
      color: "from-yellow-400 to-orange-400",
      link: "/online-gujarati-classes",
    },
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-[#fff7fb] via-[#f7f9ff] to-[#eef6ff]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-md text-pink-600 font-bold text-sm">
            🌍 Popular Online Learning Programs
          </div>

          <h2 className="mt-8 text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Explore Popular Subjects
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Personalized online tutoring for USA and international students.
            Learn SAT Math, Coding, English, Science, AP Computer Science,
            Homework Help, and more through one-to-one live classes.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {subjects.map((subject) => (
            <Link
              key={subject.name}
              href={subject.link}
              aria-label={`Explore ${subject.name} course`}
              className="group relative block"
            >
              {/* GLOW */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${subject.color} rounded-[35px] blur-2xl opacity-25 group-hover:opacity-50 transition`}
              />

              {/* CARD */}
              <div className="relative bg-white rounded-[35px] p-8 shadow-xl border border-white/50 h-full transform transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">

                {/* ICON */}
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-4xl shadow-lg`}
                >
                  {subject.emoji}
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-3xl font-extrabold text-gray-800">
                  {subject.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  Interactive live online tutoring with personalized guidance,
                  engaging lessons, and confidence-building learning support.
                </p>

                {/* CTA TEXT (cleaner than button div) */}
                <p
                  className={`mt-8 inline-block bg-gradient-to-r ${subject.color} text-white px-6 py-3 rounded-2xl font-bold shadow-lg`}
                >
                  Explore Course →
                </p>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
