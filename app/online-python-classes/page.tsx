export const metadata = {
  title: "Online Python Programming Classes | LearnAtHome",
  description:
    "Interactive online Python programming classes for students with beginner to advanced coding lessons, projects, and personalized learning.",
};

export default function PythonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef7ff] via-white to-[#f5fbff] px-6 py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <div className="text-center max-w-5xl mx-auto">

          <p className="text-blue-600 font-bold tracking-[4px] uppercase">
            Python Programming
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Online Python Programming Classes
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed">
            Learn Python programming through personalized one-to-one
            online classes designed for beginners, school students,
            future developers, and aspiring AI learners.
          </p>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">

            <h2 className="text-5xl font-extrabold text-blue-600">
              Beginner
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Friendly Learning
            </p>

          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">

            <h2 className="text-5xl font-extrabold text-cyan-600">
              Live
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Interactive Classes
            </p>

          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">

            <h2 className="text-5xl font-extrabold text-sky-600">
              Projects
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Real Coding Practice
            </p>

          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">

            <h2 className="text-5xl font-extrabold text-indigo-600">
              AI
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Future Ready Skills
            </p>

          </div>

        </div>

        {/* WHAT STUDENTS LEARN */}
        <div className="mt-32">

          <div className="text-center">

            <h2 className="text-5xl font-extrabold text-gray-900">
              What Students Learn
            </h2>

            <p className="mt-6 text-xl text-gray-600">
              Structured Python lessons focused on coding logic,
              creativity, problem solving, and real-world applications.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-20">

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-blue-700">
                Python Fundamentals
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Learn variables, loops, conditions, functions,
                data types, operators, and coding fundamentals
                through beginner-friendly explanations.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-cyan-700">
                Logic Building
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Improve logical thinking and problem-solving skills
                through coding exercises, challenges, and structured practice.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-sky-700">
                Projects & Applications
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Build fun coding projects, mini applications,
                games, automation programs, and practical Python solutions.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-indigo-700">
                AI & Future Skills
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Explore the foundations of artificial intelligence,
                data science, and modern technology using Python programming.
              </p>

            </div>

          </div>

        </div>

        {/* WHY CHOOSE */}
        <div className="mt-32 bg-white rounded-[40px] shadow-2xl p-12 md:p-16">

          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-5xl font-extrabold text-gray-900">
              Why Choose LearnAtHome
            </h2>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Our Python classes combine personalized teaching,
              interactive coding practice, and real-world projects
              to help students learn programming confidently.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            <div>

              <h3 className="text-2xl font-extrabold text-gray-800">
                Personalized Learning
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                One-to-one coding sessions designed according
                to each student’s skill level and learning goals.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-extrabold text-gray-800">
                Interactive Coding
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Hands-on coding practice, live demonstrations,
                projects, and engaging programming activities.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-extrabold text-gray-800">
                Flexible Online Classes
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Learn from anywhere with flexible schedules
                designed for students worldwide.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}