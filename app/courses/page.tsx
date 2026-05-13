export default function CoursesPage() {

  const courses = [
    { title: "English Speaking", level: "Beginner to Advanced", titleColor: "text-pink-600", color: "from-pink-500 to-rose-400" },
    { title: "Creative Writing", level: "Beginner to Advanced", titleColor: "text-purple-600", color: "from-purple-500 to-indigo-500" },
    { title: "Python Programming", level: "Beginner to Advanced", titleColor: "text-blue-600", color: "from-blue-500 to-cyan-400" },
    { title: "Java Programming", level: "Beginner to Advanced", titleColor: "text-orange-600", color: "from-orange-500 to-yellow-400" },
    { title: "C++ Programming", level: "Beginner to Advanced", titleColor: "text-gray-800", color: "from-gray-800 to-gray-500" },
    { title: "AP Computer Science", level: "Exam Preparation", titleColor: "text-green-600", color: "from-emerald-500 to-green-400" },
    { title: "Physics", level: "K- 12", titleColor: "text-indigo-600", color: "from-indigo-600 to-blue-400" },
    { title: "Biology", level: "k- 12", titleColor: "text-green-700", color: "from-green-600 to-lime-400" },
    { title: "Hindi", level: "All Levels", titleColor: "text-red-600", color: "from-red-500 to-pink-500" },
    { title: "Gujarati", level: "All Levels", titleColor: "text-yellow-600", color: "from-yellow-500 to-orange-500" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-24">

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto">

        <h1 className="text-6xl font-extrabold text-blue-500">
          Our Courses
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Explore interactive live classes designed for modern students.
        </p>

      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-10">

        {courses.map((course, index) => (

          <div
            key={index}
            className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-white"
          >

            {/* COLOR HEADER */}
            <div className={`h-28 bg-gradient-to-r ${course.color}`}></div>

            {/* CONTENT */}
            <div className="p-8">

              {/* TITLE WITH COLOR FIXED */}
              <h2 className={`text-2xl font-bold ${course.titleColor}`}>
                {course.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {course.level}
              </p>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}