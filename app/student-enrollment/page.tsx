export default function StudentEnrollment() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 to-white px-6 py-24">

      <div className="max-w-5xl mx-auto text-center">

        {/* BIG TITLE */}
        <h1 className="text-6xl font-bold text-black">
          Student Form
        </h1>

        {/* SMALL DESCRIPTION */}
        <p className="mt-6 text-xl text-gray-800">
          Fill this form to join Bright Edu Academy
        </p>

        {/* FORM BELOW */}
        <div className="mt-12">

          <iframe
            src="https://tally.so/r/q4oe18"
            width="100%"
            height="700"
            className="rounded-2xl shadow-lg"
          />

        </div>

      </div>

    </main>
  );
}
