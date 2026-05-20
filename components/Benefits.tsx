export default function Benefits() {

  const benefits = [
    "Interactive Live Classes",
    "Experienced Teachers",
    "Flexible Timings",
    "Creative Learning Methods",
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-br from-blue-50 to-blue-100">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-700">
          Why Choose LearnFromHome academy?
        </h2>

        <p className="text-center text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
          Modern online learning designed to help students succeed confidently from anywhere.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {benefits.map((benefit) => (

            <div
              key={benefit}
              className="bg-white p-10 rounded-3xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-2xl font-bold text-blue-700">
                {benefit}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}