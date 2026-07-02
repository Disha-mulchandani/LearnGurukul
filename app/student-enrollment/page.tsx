export default function StudentEnrollment() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">

      <div className="max-w-5xl mx-auto text-center">

        {/* HEADER */}
        <p className="text-blue-600 font-semibold tracking-[4px] uppercase">
          LearnGurukul Enrollment
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
          Student Enrollment Form
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Fill out the form below to book your free demo class and start your learning journey with us.
        </p>

        {/* FORM SECTION */}
        <div className="mt-12 bg-gray-50 p-4 md:p-6 rounded-2xl shadow-sm border">

          <iframe
            src="https://tally.so/r/q4oe18"
            width="100%"
            height="750"
            className="rounded-xl"
            title="Student Enrollment Form"
          />

        </div>

        {/* NOTE */}
        <p className="mt-6 text-sm text-gray-500">
          Our team will contact you within 24 hours after submission.
        </p>

      </div>

    </main>
  );
}