export default function Subjects() {

  const subjects = [
    {
      name: "English",
      color: "from-pink-500 to-rose-400",
      text: "text-pink-700"
    },
    {
      name: "Creative Writing",
      color: "from-purple-500 to-indigo-400",
      text: "text-purple-700"
    },
    {
      name: "Python",
      color: "from-blue-500 to-cyan-400",
      text: "text-blue-700"
    },
    {
      name: "Java",
      color: "from-orange-500 to-yellow-400",
      text: "text-orange-700"
    },
    {
      name: "C++",
      color: "from-gray-700 to-gray-500",
      text: "text-gray-800"
    },
    {
      name: "AP Computer Science",
      color: "from-green-500 to-emerald-400",
      text: "text-green-700"
    },
    {
      name: "Physics",
      color: "from-indigo-500 to-blue-400",
      text: "text-indigo-700"
    },
    {
      name: "Biology",
      color: "from-green-600 to-lime-400",
      text: "text-green-800"
    },
    {
      name: "Hindi",
      color: "from-red-500 to-pink-500",
      text: "text-red-700"
    },
    {
      name: "Gujarati",
      color: "from-yellow-500 to-orange-500",
      text: "text-yellow-700"
    },
  ];

  return (
    <section className="py-28 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-6xl font-extrabold text-center text-blue-800">
          Popular Subjects
        </h2>

        <p className="text-center text-gray-600 text-xl mt-6">
          Expert-led online learning for modern students.
        </p>

        {/* SUBJECT CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {subjects.map((subject) => (

            <div
  key={subject.name}
  className={`bg-gradient-to-br ${subject.color} p-5 rounded-[30px] shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 h-full`}
>
<div className="bg-white rounded-2xl p-5 h-full flex flex-col justify-center">

                <h3 className={`text-3xl font-extrabold ${subject.text}`}>
                  {subject.name}
                </h3>

                <p className="mt-4 text-gray-600 text-lg">
                  Interactive online classes with personalized guidance.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}