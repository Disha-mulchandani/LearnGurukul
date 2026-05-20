export const metadata = {
  title: "AP Computer Science Tutor | LearnAtHome",
  description:
    "Personalized AP Computer Science tutoring with Java programming, coding practice, exam preparation, and one-to-one online mentoring.",
};

export default function APComputerSciencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f4fff8] via-white to-[#eefcff] px-6 py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <div className="text-center max-w-5xl mx-auto">

          <p className="text-green-600 font-bold tracking-[4px] uppercase">
            AP Computer Science
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            AP Computer Science Tutoring
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed">
            Personalized one-to-one AP Computer Science classes designed
            to help students master Java programming, problem solving,
            algorithms, object-oriented programming, and AP exam preparation
            with confidence.
          </p>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">
            <h2 className="text-5xl font-extrabold text-green-600">
              1:1
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Personalized Mentoring
            </p>
          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">
            <h2 className="text-5xl font-extrabold text-blue-600">
              Java
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Core Programming Language
            </p>
          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">
            <h2 className="text-5xl font-extrabold text-purple-600">
              AP
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Exam Preparation Support
            </p>
          </div>

          <div className="bg-white rounded-[30px] shadow-xl p-8 text-center">
            <h2 className="text-5xl font-extrabold text-pink-600">
              Live
            </h2>

            <p className="mt-4 text-gray-600 font-semibold">
              Interactive Online Classes
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
              Comprehensive AP Computer Science concepts explained
              through interactive coding and guided practice.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-20">

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-green-700">
                Java Programming Fundamentals
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Students learn variables, loops, methods, conditionals,
                arrays, classes, objects, and core Java syntax through
                beginner-friendly explanations and coding exercises.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-blue-700">
                Object-Oriented Programming
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Understand classes, inheritance, encapsulation,
                constructors, and polymorphism with real coding examples
                and practical projects.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-purple-700">
                Problem Solving & Algorithms
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Improve logical thinking and computational problem solving
                through coding challenges, algorithm practice,
                and structured exercises.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-xl">

              <h3 className="text-3xl font-extrabold text-pink-700">
                AP Exam Preparation
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Practice AP-style questions, FRQs, MCQs,
                debugging techniques, and exam strategies designed
                to maximize student confidence and performance.
              </p>

            </div>

          </div>

        </div>

        {/* WHY CHOOSE */}
        <div className="mt-32 bg-white rounded-[40px] shadow-2xl p-12 md:p-16">

          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-5xl font-extrabold text-gray-900">
              Why Students Choose LearnAtHome
            </h2>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Our AP Computer Science classes combine personalized teaching,
              practical coding experience, and structured exam preparation
              to help students succeed academically and build real-world
              programming confidence.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            <div>
              <h3 className="text-2xl font-extrabold text-gray-800">
                Personalized Attention
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                One-to-one mentoring tailored to each student’s learning pace,
                strengths, and academic goals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-gray-800">
                Interactive Coding
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Live coding sessions, guided practice,
                debugging activities, and hands-on projects.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-gray-800">
                Global Learning Experience
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Learn online from anywhere with engaging
                and flexible international tutoring sessions.
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}