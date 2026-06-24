export default function BecomeTeacher() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef5ff] via-white to-[#f8f5ff] px-6 py-28 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">

          <p className="text-blue-600 font-bold tracking-[3px] uppercase">
            Join Our Team
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight">
            Become a Teacher
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Inspire students around the world through interactive online
            teaching and become part of the Bright Edu educator community.
          </p>

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* CARD 1 */}
          <div className="bg-white p-10 rounded-[35px] shadow-xl hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
              🌍
            </div>

            <h3 className="mt-8 text-3xl font-extrabold text-gray-800">
              Teach Globally
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Connect with students from different countries through live
              online one-to-one classes.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white p-10 rounded-[35px] shadow-xl hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
              💻
            </div>

            <h3 className="mt-8 text-3xl font-extrabold text-gray-800">
              Flexible Teaching
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Teach from home with flexible schedules designed for modern
              educators and professionals.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white p-10 rounded-[35px] shadow-xl hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-3xl">
              ⭐
            </div>

            <h3 className="mt-8 text-3xl font-extrabold text-gray-800">
              Grow Your Career
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Build teaching experience, work with passionate learners,
              and grow professionally with LearnAtHome.
            </p>

          </div>

        </div>

        {/* FORM SECTION */}
        <div className="mt-24 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">

          <div className="px-8 md:px-14 pt-12 pb-6">

            <h2 className="text-4xl font-extrabold text-gray-800">
              Teacher Application Form
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below to apply as an online teacher at
              Bright Edu.
            </p>

          </div>

          {/* TALLY FORM */}
          <iframe
            src="https://tally.so/r/dWK4pr"
            width="100%"
            height="1000"
            className="border-0"
          />

        </div>

      </div>

    </main>
  );
}
