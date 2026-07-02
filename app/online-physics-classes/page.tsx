export const metadata = {
  title: "Online Python Programming Classes | LearnGurukul",
  description:
    "Interactive online Python programming classes for beginners to advanced learners. Learn coding, projects, logic building, and AI basics with 1:1 tutoring worldwide.",
};

export default function PythonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef7ff] via-white to-[#f5fbff] px-6 py-28">

      <div className="max-w-7xl mx-auto text-center">

        {/* HEADER */}
        <p className="text-blue-600 font-bold tracking-[4px] uppercase">
          LearnGurukul Python Classes
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900">
          Online Python Programming Classes
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Learn Python programming from basics to advanced through interactive
          1:1 online classes. Perfect for beginners, school students, and future
          developers interested in AI, web development, and automation.
        </p>

        {/* WHAT WE TEACH (SEO LIST) */}
        <div className="mt-12 text-lg text-gray-700 max-w-2xl mx-auto">

          <h2 className="font-bold text-xl text-gray-900">
            What you will learn:
          </h2>

          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔ Python basics (variables, loops, conditions)</li>
            <li>✔ Functions, data structures & problem solving</li>
            <li>✔ Real-world coding projects</li>
            <li>✔ Logic building & programming skills</li>
            <li>✔ Introduction to AI & automation</li>
          </ul>

        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="/student-enrollment"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition"
          >
            Book Free Demo Class
          </a>
        </div>

      </div>
    </main>
  );
}