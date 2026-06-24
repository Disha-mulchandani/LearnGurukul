export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 max-w-4xl mx-auto">

      <h1 className="text-4xl font-extrabold text-blue-700">
        Contact Bright Edu
      </h1>

      <p className="mt-4 text-gray-600 text-lg">
        Get in touch with us for demo classes, course details, or any queries.
      </p>

      {/* CONTACT DETAILS */}
      <div className="mt-10 space-y-6 text-gray-700">

        {/* EMAIL */}
        <div className="p-6 border rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold text-black">📧 Email</h2>
          <p className="mt-2 text-blue-600 font-medium">
            vidyaverse6@gmail.com
          </p>
        </div>

        {/* WHATSAPP */}
        <div className="p-6 border rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold text-black">💬 WhatsApp</h2>
          <p className="mt-2 text-gray-600">
            Message us directly on WhatsApp for quick response
          </p>

          <a
            href="https://wa.me/918905122222"
            target="_blank"
            className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">
          Start Learning Today 🚀
        </h2>

        <a
          href="/student-enrollment"
          className="inline-block mt-6 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Book Free Demo
        </a>
      </div>

    </main>
  );
}
