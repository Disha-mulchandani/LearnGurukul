export const metadata = {
  title: "Online Creative Writing Classes | LearnAtHome",
  description:
    "Personalized one-to-one creative writing classes for students worldwide.",
};

export default function CreativeWritingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7ff] to-white px-6 py-28">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto">

          <p className="text-purple-600 font-bold tracking-[3px] uppercase">
            Creative Writing Classes
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Online Creative Writing Classes
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Improve storytelling, imagination, descriptive writing,
            grammar, and vocabulary through engaging one-to-one
            online creative writing sessions.
          </p>

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-10 mt-24">

          <div className="bg-white rounded-[35px] p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-purple-700">
              Storytelling
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Learn how to create engaging characters, settings,
              plots, and imaginative stories.
            </p>
          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-purple-700">
              Vocabulary
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Build strong vocabulary and descriptive language
              for powerful writing.
            </p>
          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-purple-700">
              Personalized Guidance
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              One-to-one mentoring focused on creativity,
              confidence, and writing improvement.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}