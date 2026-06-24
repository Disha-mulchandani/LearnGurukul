export default function Testimonials() {

  const reviews = [
    {
      name: "Parent from UAE",
      emoji: "🌟",
      text: "My child became much more confident in English speaking and communication."
    },
    {
      name: "Parent from INDIA",
      emoji: "💻",
      text: "Python classes were interactive, creative, and very easy to understand."
    },
    {
      name: "Parent from USA",
      emoji: "🎨",
      text: "Excellent online teaching methods with engaging activities and personal attention."
    }
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-[#eef6ff] via-[#fdf7ff] to-[#fff8f3] overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-md text-purple-600 font-bold text-sm">
            Loved by Students & Parents
          </div>

          <h2 className="mt-8 text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Student Success Stories
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from students and parents learning
            with Bright Edu.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="group relative"
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-[35px] blur-2xl opacity-30 group-hover:opacity-50 transition duration-500">
              </div>

              {/* CARD */}
              <div className="relative bg-white rounded-[35px] p-10 shadow-xl hover:-translate-y-3 hover:rotate-1 transition duration-300">

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <div className="text-yellow-400 text-2xl">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <div className="text-4xl">
                    {review.emoji}
                  </div>

                </div>

                {/* REVIEW */}
                <p className="mt-8 text-lg text-gray-700 leading-relaxed font-medium">
                  "{review.text}"
                </p>

                {/* USER */}
                <div className="mt-10 flex items-center gap-4">

                  {/* AVATAR */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {review.name.charAt(0)}
                  </div>

                  <div>

                    <h3 className="text-xl font-extrabold text-gray-800">
                      {review.name}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Verified Parent Review
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
