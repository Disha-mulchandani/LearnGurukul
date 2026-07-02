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
      name: "Science & Physics",
      emoji: "⚡",
      color: "from-indigo-400 to-blue-400",
      link: "/online-physics-classes",
    },
    {
      name: "Languages",
      emoji: "🌍",
      color: "from-red-400 to-pink-400",
      link: "/online-language-classes",
    },
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-blue-50">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Learn What You Need, At Your Own Pace
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Personalized 1:1 online tutoring designed to help students improve understanding,
            build confidence, and achieve academic success across different subjects.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {subjects.map((subject) => (
            <Link
              key={subject.name}
              href={subject.link}
              className="group relative block"
            >

              {/* GLOW */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${subject.color} rounded-[30px] blur-2xl opacity-20 group-hover:opacity-40 transition`}
              />

              {/* CARD */}
              <div className="relative bg-white rounded-[30px] p-8 shadow-md border border-gray-100 h-full transition group-hover:-translate-y-1 group-hover:shadow-xl">

                {/* ICON */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-3xl shadow-md`}
                >
                  {subject.emoji}
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-2xl font-bold text-gray-800">
                  {subject.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  One-to-one live tutoring with structured lessons and personalized guidance.
                </p>

                {/* CTA */}
                <p className="mt-6 text-sm font-semibold text-blue-600 group-hover:underline">
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