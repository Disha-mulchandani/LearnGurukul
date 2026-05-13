export default function BlogPage() {

  const blogs = [
    {
      title: "How Online Classes Improve Student Confidence",
      category: "Education",
      subject: "English Communication",
      description:
        "Interactive online learning helps students improve confidence, speaking skills and classroom participation through personalized guidance."
    },
    {
      title: "Why Kids Should Learn Coding Early",
      category: "Coding",
      subject: "Python & Computer Science",
      description:
        "Coding improves creativity, logical thinking and problem-solving abilities while preparing students for future technology careers."
    },
    {
      title: "Creative Writing Skills for Young Students",
      category: "English",
      subject: "Creative Writing",
      description:
        "Creative writing encourages imagination, vocabulary development and stronger communication skills in young learners."
    },
    {
      title: "Benefits of Learning AP Computer Science",
      category: "Technology",
      subject: "AP Computer Science",
      description:
        "AP Computer Science develops programming knowledge, computational thinking and advanced coding skills for students."
    },
    {
      title: "How Personalized Learning Helps Students",
      category: "Learning",
      subject: "Online Tutoring",
      description:
        "Personalized teaching methods allow students to learn at their own pace and improve academic performance effectively."
    },
    {
      title: "Importance of Communication Skills",
      category: "Education",
      subject: "English Speaking",
      description:
        "Strong communication skills help students express ideas confidently in academics, interviews and real-world situations."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 to-white px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <h1 className="text-6xl font-extrabold  text-black ">
            Learnora Blog
          </h1>

          <p className="mt-6 text-xl text-gray-800 max-w-3xl mx-auto">
            Explore learning tips, coding knowledge, communication skills and modern education insights for students.
          </p>

        </div>

        {/* BLOG CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {blogs.map((blog, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-blue-100"
            >

              {/* CATEGORY */}
              <p className="text-black font-bold text-sm uppercase tracking-wide">
                {blog.category}
              </p>

              {/* SUBJECT */}
              <p className="mt-2 text-blue-700 font-semibold">
                {blog.subject}
              </p>

              {/* TITLE */}
              <h2 className="text-3xl font-bold mt-5 text-black leading-snug">
                {blog.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                {blog.description}
              </p>

             

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}