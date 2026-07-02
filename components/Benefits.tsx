export default function Benefits() {
  const benefits = [
    {
      title: "Interactive Live Classes",
      desc: "Real-time learning with teachers and doubt solving.",
      icon: "🎥",
    },
    {
      title: "Experienced Teachers",
      desc: "Qualified educators with proven teaching methods.",
      icon: "👩‍🏫",
    },
    {
      title: "Flexible Timings",
      desc: "Learn at your own schedule from anywhere.",
      icon: "⏰",
    },
    {
      title: "Creative Learning",
      desc: "Activity-based learning to build real understanding.",
      icon: "💡",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Why Choose LearnGurukul Academy?
        </h2>

        <p className="text-center text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Modern online learning designed to help students build strong skills with confidence.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-6 mt-14">

          {benefits.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition bg-white"
            >

              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}