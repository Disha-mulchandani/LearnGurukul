export const metadata = {
  title: "Online Gujarati Classes | Bright Edu",
  description:
    "Interactive Gujarati language tutoring for speaking, grammar, reading, and writing.",
};

export default function GujaratiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffaf0] via-white to-[#fffdf7] px-6 py-28">

      <div className="max-w-7xl mx-auto text-center">

        <p className="text-yellow-700 font-bold tracking-[4px] uppercase">
          Gujarati Language Classes
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900">
          Online Gujarati Classes
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Learn Gujarati speaking, grammar, vocabulary,
          reading, and writing through personalized
          online language learning sessions.
        </p>

      </div>

    </main>
  );
}
