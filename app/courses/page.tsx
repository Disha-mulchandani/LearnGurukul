import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Online Tutoring Courses | Math, SAT, English, Coding & Homework Help | Bright Edu",

  description:
    "Explore expert-led 1:1 online tutoring courses for Math, SAT Preparation, English, Reading, Creative Writing, Coding, Science, and Homework Help for students worldwide.",

  keywords: [
    "online tutoring courses",
    "1:1 online tutoring",
    "SAT math tutor",
    "online algebra tutor",
    "english tutor online",
    "creative writing classes",
    "reading tutor online",
    "coding classes online",
    "science tutoring",
    "math homework help",
    "homework help online",
    "SAT preparation online",
    "online tutoring USA",
    "online classes for kids",
    "Bright Edu",
  ],
};

export default function CoursesPage() {

  const courses = [

    {
      title: "SAT Math Preparation",
      slug: "sat-math-preparation",
      level: "Exam Preparation",
      titleColor: "text-blue-700",
      color: "from-blue-600 to-indigo-500",
      icon: "🎯",
      description:
        "Master SAT Math through algebra, geometry, practice tests, and personalized online tutoring for USA students.",
    },

    {
      title: "Homework Help",
      slug: "homework-help-online",
      level: "All Grades",
      titleColor: "text-green-700",
      color: "from-green-500 to-emerald-400",
      icon: "🧠",
      description:
        "Get online homework help in Math, Science, English, Coding, and school subjects through expert tutoring.",
    },

    {
      title: "Algebra Tutoring",
      slug: "algebra",
      level: "All Grades",
      titleColor: "text-indigo-700",
      color: "from-indigo-600 to-purple-500",
      icon: "📘",
      description:
        "Learn algebra step-by-step with equations, worksheets, homework help, and beginner-friendly explanations.",
    },

    {
      title: "English Speaking",
      slug: "english-speaking-classes",
      level: "Beginner to Advanced",
      titleColor: "text-pink-600",
      color: "from-pink-500 to-rose-400",
      icon: "📖",
      description:
        "Improve fluency, vocabulary, grammar, pronunciation, and communication confidence through interactive live sessions.",
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
      title: "Reading & Comprehension",
      slug: "online-reading-tutor",
      level: "K–12",
      titleColor: "text-orange-600",
      color: "from-orange-500 to-yellow-400",
      icon: "📚",
      description:
        "Improve reading fluency, comprehension, vocabulary, and critical thinking through guided reading sessions.",
    },

    {
      title: "Python Programming",
      slug: "online-python-classes",
      level: "Beginner to Advanced",
      titleColor: "text-cyan-700",
      color: "from-cyan-500 to-blue-500",
      icon: "💻",
      description:
        "Learn coding fundamentals, problem solving, AI basics, and real-world Python programming skills.",
    },

    {
      title: "AP Computer Science",
      slug: "ap-computer-science-tutor",
      level: "AP Exam Preparation",
      titleColor: "text-green-600",
      color: "from-emerald-500 to-green-400",
      icon: "🧠",
      description:
        "Comprehensive AP Computer Science tutoring with coding practice and exam-focused preparation.",
    },

    {
      title: "Physics Tutoring",
      slug: "online-physics-classes",
      level: "Middle & High School",
      titleColor: "text-indigo-600",
      color: "from-indigo-600 to-blue-400",
      icon: "⚡",
      description:
        "Understand physics concepts through visual explanations, formulas, and personalized problem-solving support.",
    },

  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7ff] via-[#fff8fb] to-[#eef6ff] px-6 py-28 overflow-hidden">

      {/* HEADER */}
      <div className="text-center max-w-5xl mx-auto">

        <div className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-bold text-sm">
          Personalized Online Learning for Students Worldwide
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          1:1 Online Tutoring Courses
          <span className="block text-blue-600">
            for USA & Global Students
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Explore personalized online tutoring classes for Math, SAT Preparation,
          English, Reading, Creative Writing, Coding, Science, and Homework Help.
          Learn from expert tutors through interactive 1:1 live sessions designed
          for student success.
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
            <div
              className={`absolute inset-0 bg-gradient-to-br ${course.color} rounded-[35px] blur-2xl opacity-30 group-hover:opacity-50 transition duration-500`}
            ></div>

            {/* CARD */}
            <div className="relative bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300 h-full border border-gray-100">

              {/* TOP */}
              <div className={`h-32 bg-gradient-to-r ${course.color} relative`}>

                <div className="absolute bottom-[-30px] left-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-xl">
                  {course.icon}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8 pt-14 flex flex-col h-full">

                <h2 className={`text-3xl font-extrabold ${course.titleColor}`}>
                  {course.title}
                </h2>

                <p className="mt-3 text-gray-500 font-semibold">
                  {course.level}
                </p>

                <p className="mt-6 text-gray-600 leading-relaxed flex-grow">
                  {course.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                    Learn More
                  </span>

                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
                    →
                  </div>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* SEO SECTION */}
      <section className="max-w-6xl mx-auto mt-28">

        <div className="bg-white rounded-[40px] shadow-xl border p-10 md:p-16">

          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Personalized Online Tutoring for Every Student
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Bright Edu provides personalized 1:1 online tutoring for students
            worldwide. Our live online classes help students improve academic
            performance, confidence, communication skills, and problem-solving abilities.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We specialize in SAT Math preparation, Algebra, English speaking,
            Reading comprehension, Creative Writing, Coding, Science,
            Homework Help, and academic tutoring for Grades 1–12.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Our tutors work closely with students following the USA curriculum,
            British curriculum, IB, CBSE, ICSE, and international learning programs.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-4 mt-10">

            {[
              "SAT Math",
              "Algebra",
              "Creative Writing",
              "Reading",
              "English",
              "Coding",
              "Homework Help",
              "Science",
              "1:1 Tutoring",
              "Online Classes",
            ].map((tag) => (

              <div
                key={tag}
                className="bg-blue-50 text-blue-700 px-5 py-3 rounded-full font-semibold"
              >
                {tag}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto mt-24 mb-10">

        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-[40px] p-12 text-center text-white">

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Start Learning With Expert Tutors
          </h2>

          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            Book a free demo class and experience personalized online learning
            designed for student success.
          </p>

          <Link
            href="/student-enrollment"
            className="inline-block mt-10 bg-white text-blue-700 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition"
          >
            Book Free Demo
          </Link>

        </div>

      </section>

    </main>
  );
}
