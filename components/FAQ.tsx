export default function FAQ() {

  const faqs = [
    {
      question: "Are classes conducted online?",
      answer: "Yes, all classes are conducted live online with interactive teaching."
    },
    {
      question: "Do you offer coding classes?",
      answer: "Yes, we teach English, Public Speaking , Python, Java, C++, AP Computer Science and more."
    },
    {
      question: "Are classes available internationally?",
      answer: "Yes, students from different countries can join Learnora Academy."
    },
    {
      question: "Can students book a demo class?",
      answer: "Absolutely! Students can contact us for a free demo session."
    }
  ];

  return (
    <section className="py-28 px-6 bg-white">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-6xl font-bold text-center text-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-20 space-y-8">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-gray-100 p-8 rounded-3xl"
            >

              {/* UPDATED QUESTION COLOR */}
              <h3 className="text-2xl font-bold text-blue-500">
                {faq.question}
              </h3>

              <p className="mt-4 text-lg text-black">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}