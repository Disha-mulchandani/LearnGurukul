export default function Stats() {

  const stats = [
    {
      number: "100+",
      label: "Live Classes Conducted"
    },
    {
      number: "1:1",
      label: "Personalized Learning Model"
    },
    {
      number: "10+",
      label: "Academic Subjects Covered"
    },
    {
      number: "Trusted",
      label: "By Parents Worldwide"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Why Parents Trust Us
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            We focus on real learning outcomes, personalized attention, and student confidence growth.
          </p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition"
            >

              <h2 className="text-5xl font-extrabold text-blue-700">
                {stat.number}
              </h2>

              <p className="mt-3 text-lg text-gray-600 font-medium">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}