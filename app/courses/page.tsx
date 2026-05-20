import Link from "next/link";

export default function CoursesPage() {

  const courses = [
    {
      title: "English Speaking",
      slug: "english-speaking-classes",
      level: "Beginner to Advanced",
      titleColor: "text-pink-600",
      color: "from-pink-500 to-rose-400",
      icon: "📖",
      description:
        "Improve fluency, vocabulary, grammar, pronunciation, and public speaking confidence through interactive live sessions.",
    },
    {
      title: "Creative Writing",
      slug: "creative-writing-classes",
      level: "Beginner to Advanced",
      titleColor: "text-purple-600",
      color: "from-purple-500 to-indigo-500",
      icon: "📝",
      description:
        "Develop storytelling, imagination, descriptive writing, and advanced vocabulary with engaging creative activities.",
    },
    {
      title: "Python Programming",
      slug: "online-python-classes",
      level: "Beginner to Advanced",
      titleColor: "text-blue-600",
      color: "from-blue-500 to-cyan-400",
      icon: "🖥️",
      description:
        "Learn coding fundamentals, logic building, projects, AI basics, and real-world Python programming skills.",
    },
    {
      title: "Java Programming",
      slug: "java-programming-classes",
      level: "Beginner to Advanced",
      titleColor: "text-orange-600",
      color: "from-orange-500 to-yellow-400",
      icon: "⚙️",
      description:
        "Master object-oriented programming, problem solving, and Java development with practical coding exercises.",
    },
    {
      title: "C++ Programming",
      slug: "cplusplus-programming-classes",
      level: "Beginner to Advanced",
      titleColor: "text-gray-800",
      color: "from-gray-800 to-gray-500",
      icon: "💡",
      description:
        "Build strong programming logic, algorithms, and coding confidence with beginner-friendly C++ lessons.",
    },
    {
      title: "AP Computer Science",
      slug: "ap-computer-science-tutor",
      level: "Exam Preparation",
      titleColor: "text-green-600",
      color: "from-emerald-500 to-green-400",
      icon: "🧠",
      description:
        "Comprehensive AP Computer Science preparation with coding practice, concepts, and exam-focused guidance.",
    },
    {
      title: "Physics",
      slug: "online-physics-classes",
      level: "K-12",
      titleColor: "text-indigo-600",
      color: "from-indigo-600 to-blue-400",
      icon: "🔬",
      description:
        "Understand physics concepts through visual explanations, problem solving, and personalized support.",
    },
    {
      title: "Biology",
      slug: "online-biology-classes",
      level: "K-12",
      titleColor: "text-green-700",
      color: "from-green-600 to-lime-400",
      icon: "🌿",
      description:
        "Learn biology with diagrams, interactive explanations, and simplified lessons designed for student success.",
    },
    {
      title: "Hindi",
      slug: "online-hindi-classes",
      level: "All Levels",
      titleColor: "text-red-600",
      color: "from-red-500 to-pink-500",
      icon: "📚",
      description:
        "Improve reading, writing, grammar, and speaking skills through engaging and student-friendly lessons.",
    },
    {
      title: "Gujarati",
      slug: "online-gujarati-classes",
      level: "All Levels",
      titleColor: "text-yellow-600",
      color: "from-yellow-500 to-orange-500",
      icon: "🎓",
      description:
        "Interactive Gujarati classes focused on communication, grammar, writing, and language confidence.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7ff] via-[#fff8fb] to-[#eef6ff] px-6 py-28 overflow-hidden">

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto">

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight">
          Explore Our Courses
        </h1>

        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
          Interactive one-to-one online classes designed to help students
          learn confidently, creatively, and successfully.
        </p>

      </div>

      {/* COURSE GRID */}
      <div className="max-w-7xl mx-auto mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {courses.map((course, index) => (

          <Link
            href={`/${course.slug}`}
            key={index}
            className="group relative block"
          >

            {/* GLOW */}
            <div className={`absolute inset-0 bg-gradient-to-br ${course.color} rounded-[35px] blur-2xl opacity-30 group-hover:opacity-50 transition duration-500`}>
            </div>

            {/* CARD */}
            <div className="relative bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300 h-full">

              {/* TOP GRADIENT */}
              <div className={`h-32 bg-gradient-to-r ${course.color} relative`}>

                {/* ICON */}
                <div className="absolute bottom-[-30px] left-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-xl">
                  {course.icon}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8 pt-14 flex flex-col h-full">

                {/* TITLE */}
                <h2 className={`text-3xl font-extrabold ${course.titleColor}`}>
                  {course.title}
                </h2>

                {/* LEVEL */}
                <p className="mt-3 text-gray-500 font-semibold">
                  {course.level}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-6 text-gray-600 leading-relaxed flex-grow">
                  {course.description}
                </p>

                {/* SEO TEXT */}
                <p className="mt-8 text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Learn More →
                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}