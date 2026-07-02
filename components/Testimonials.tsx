export default function Testimonials() {

  const reviews = [
    {
      name: "Parent (UAE)",
      emoji: "🌟",
      text: "My daughter was struggling with English speaking, but after a few classes she started speaking more confidently in daily conversations."
    },
    {
      name: "Parent (India)",
      emoji: "💻",
      text: "The Python classes are very clear and step-by-step. My son now understands coding basics and enjoys practicing small programs."
    },
    {
      name: "Parent (USA)",
      emoji: "📚",
      text: "The teacher gives personal attention and explains concepts slowly. My child’s interest in Math has improved a lot."
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

          <h2 className="mt-8 text-4xl md:text-5xl font-extrabold text-gray-800">
            Real Learning Experiences
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Honest feedback from parents whose children are learning with personalized 1:1 online classes.
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
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-[35px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              {/* CARD */}
              <div className="relative bg-white rounded-[35px] p-10 shadow-lg hover:-translate-y-2 transition duration-300">

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <div className="text-yellow-400 text-xl">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <div className="text-3xl">
                    {review.emoji}
                  </div>

                </div>

                {/* REVIEW */}
                <p className="mt-6 text-gray-700 leading-relaxed">
                  “{review.text}”
                </p>

                {/* USER */}
                <div className="mt-8 flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold shadow-md">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Parent Feedback
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