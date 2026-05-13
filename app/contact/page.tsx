export default function ContactPage() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 to-white px-6 py-24">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <h1 className="text-6xl md:text-6xl font-extrabold text-black leading-tight">
            Contact us
          </h1>

          <p className="mt-8 text-2xl text-gray-700 max-w-3xl mx-auto">
            We would love to support your learning journey with interactive online classes and personalized guidance.
          </p>

        </div>

        {/* CONTACT CARD */}
        <div className="mt-20 bg-white rounded-[40px] shadow-2xl p-12 border border-blue-100">

          <div className="space-y-10">

            {/* EMAIL */}
            <div className="bg-blue-50 p-8 rounded-3xl hover:shadow-lg transition duration-300">

              <h2 className="text-3xl font-bold text-blue-700">
                Email Address
              </h2>

              <p className="mt-4 text-2xl text-gray-700 font-semibold">
                📧 vidyaverse6@gmail.com
              </p>

            </div>

            {/* ONLINE */}
            <div className="bg-blue-50 p-8 rounded-3xl hover:shadow-lg transition duration-300">

              <h2 className="text-3xl font-bold text-blue-700">
                Online Learning
              </h2>

              <p className="mt-4 text-2xl text-black text-gray-700 leading-relaxed">
                 Learnora Academy offers interactive live online classes designed to make learning engaging, flexible and effective for students worldwide. Our experienced teachers provide personalized guidance, creative activities and real-time support to help students build confidence and improve academic skills from the comfort of their homes.
              </p>

            </div>

            {/* SUPPORT */}
            <div className="bg-blue-50 p-10 rounded-3xl hover:shadow-xl transition duration-300 border border-blue-100">

              <h2 className="text-4xl font-extrabold text-blue-700">
                Student Support
              </h2>

              <p className="mt-5 text-2xl text-black font-semibold">
                💬 Connect with us: +91 8905122222
              </p>

              <p className="mt-8 text-2xl text-gray-700 leading-relaxed">
                Learnora Academy is dedicated to providing interactive, engaging and personalized online learning experiences for students worldwide.
              </p>

              <p className="mt-6 text-2xl text-black text-gray-700 leading-relaxed">
                If you have any questions regarding classes, teachers, schedules, subjects, demo sessions or learning guidance, feel free to contact us anytime. Our team is always ready to support students and parents throughout their learning journey.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}