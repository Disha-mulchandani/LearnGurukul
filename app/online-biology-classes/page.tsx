export const metadata = {
  title: "Online Biology Classes | LearnGurukul",
  description:
    "Interactive online Biology tutoring with diagrams, visual explanations, and personalized 1:1 guidance for students worldwide.",
};

export default function BiologyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f3fff6] via-white to-[#f7fffb] px-6 py-28">

      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-5xl mx-auto">

          <p className="text-green-700 font-bold tracking-[4px] uppercase">
            LearnGurukul Biology Classes
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900">
            Online Biology Classes
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Learn Biology through interactive diagrams,
            visual explanations, and personalized 1:1 online tutoring
            designed to build strong conceptual understanding in students worldwide.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-24">

          <div className="bg-white rounded-[35px] p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-green-700">
              Visual Learning
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Learn cells, organs, genetics, and life science concepts
              through clear diagrams and simplified explanations.
            </p>
          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-emerald-700">
              Academic Support
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Personalized tutoring to improve school performance,
              exam results, and conceptual clarity.
            </p>
          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-lime-700">
              Interactive Classes
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Live 1:1 online Biology classes focused on engagement,
              understanding, and practical learning.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}