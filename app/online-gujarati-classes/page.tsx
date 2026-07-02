export const metadata = {
  title: "Online Gujarati Classes | LearnGurukul",
  description:
    "Interactive Gujarati language tutoring for speaking, grammar, reading, writing, and vocabulary. 1:1 online classes for students worldwide.",
};

export default function GujaratiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffaf0] via-white to-[#fffdf7] px-6 py-28">

      <div className="max-w-7xl mx-auto text-center">

        <p className="text-yellow-700 font-bold tracking-[4px] uppercase">
          LearnGurukul Gujarati Classes
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900">
          Online Gujarati Classes
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Learn Gujarati speaking, grammar, vocabulary,
          reading, and writing through personalized 1:1 online
          tutoring sessions designed for students worldwide.
        </p>

        <div className="mt-12 text-gray-700 text-lg">
          <h2 className="font-bold">What you will learn:</h2>
          <ul className="mt-4 space-y-2">
            <li>✔ Gujarati speaking practice</li>
            <li>✔ Grammar improvement</li>
            <li>✔ Reading & writing skills</li>
            <li>✔ Vocabulary building</li>
          </ul>
        </div>

      </div>

    </main>
  );
}