export default function Testimonials() {

  const reviews = [
    {
      name: "Parent from UAE",
      text: "My child became much more confident in English speaking and communication."
    },
    {
      name: "Parent from India",
      text: "Python classes were interactive, creative and very easy to understand."
    },
    {
      name: "Parent from India",
      text: "Excellent online teaching methods with engaging activities and personal attention."
    }
  ];

  return (
    <section className="py-28 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl font-bold text-center text-blue-600">
          Student Success Stories
        </h2>

        <p className="text-center text-xl text-gray-600 mt-6">
          Hear from students and parents learning with Learnora.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="bg-white p-10 rounded-[30px] shadow-lg hover:shadow-2xl transition"
            >

              <div className="text-yellow-500 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-6 text-lg text-black text-bold leading-relaxed">
                "{review.text}"
              </p>

              <h3 className="mt-8 text-2xl font-bold text-blue-700">
                {review.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}