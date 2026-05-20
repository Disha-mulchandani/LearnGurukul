export const metadata = {
  title: "Online Biology Classes | LearnAtHome",
  description:
    "Interactive Biology tutoring for students worldwide with diagrams, visual explanations, and personalized guidance.",
};

export default function BiologyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f3fff6] via-white to-[#f7fffb] px-6 py-28">

      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-5xl mx-auto">

          <p className="text-green-700 font-bold tracking-[4px] uppercase">
            Biology Classes
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900">
            Online Biology Classes
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Learn Biology through interactive diagrams,
            visual explanations, and personalized online tutoring
            designed to build strong conceptual understanding.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-24">

          <div className="bg-white rounded-[35px] p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-green-700">
              Visual Learning
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Learn cells, systems, genetics, and life science
              concepts through engaging diagrams and explanations.
            </p>
          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-emerald-700">
              Academic Support
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Personalized lessons designed to improve understanding,
              confidence, and school performance.
            </p>
          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-lime-700">
              Interactive Classes
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Live one-to-one online classes focused on
              student engagement and practical learning.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}