export default function FAQ() {

  const faqs = [
    {
      question: "Are classes conducted online?",
      answer:
        "Yes, all classes are conducted live online with interactive teaching and personalized guidance.",
      emoji: "💻",
    },
    {
      question: "Do you offer coding classes?",
      answer:
        "Yes! We teach Python, Java, C++, AP Computer Science, and beginner-friendly coding programs.",
      emoji: "🚀",
    },
    {
      question: "Are classes available internationally?",
      answer:
        "Absolutely. Students from different countries can join LearnGurukul from anywhere in the world.",
      emoji: "🌍",
    },
    {
      question: "Can students book a demo class?",
      answer:
        "Yes! Students and parents can book a free demo session before enrollment.",
      emoji: "⭐",
    },
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-[#fff9fb] via-[#f5f7ff] to-[#eef8ff] overflow-hidden">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-md text-blue-600 font-bold text-sm">
            Questions & Answers
          </div>

          <h2 className="mt-8 text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Everything parents and students need to know about
            learning with LearnAtHome.
          </p>

        </div>

        {/* FAQ LIST */}
        <div className="mt-20 space-y-8">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="group relative"
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-[35px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-500">
              </div>

              {/* CARD */}
              <div className="relative bg-white rounded-[35px] p-8 md:p-10 shadow-xl hover:-translate-y-1 transition duration-300">

                {/* TOP */}
                <div className="flex items-start gap-5">

                  {/* EMOJI */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
                    {faq.emoji}
                  </div>

                  {/* TEXT */}
                  <div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-snug">
                      {faq.question}
                    </h3>

                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
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
