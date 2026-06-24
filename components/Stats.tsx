export default function Stats() {

  const stats = [
    {
      number: "100+",
      label: "Classes Conducted"
    },
    {
      number: "100+",
      label: "Students Worldwide"
    },
    {
      number: "10+",
      label: "Subjects Offered"
    },
    {
      number: "95%",
      label: "Student Satisfaction"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 to-purple-700 text-white px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {stats.map((stat, index) => (

          <div
            key={index}
            className="text-center"
          >
            <h2 className="text-6xl font-extrabold">
              {stat.number}
            </h2>

            <p className="mt-4 text-xl text-white/80">
              {stat.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
