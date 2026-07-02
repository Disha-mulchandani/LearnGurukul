export const metadata = {
  title: "Online Hindi Classes | LearnGurukul",
  description:
    "Interactive online Hindi classes for speaking, reading, writing, grammar, and vocabulary. 1:1 tutoring for students worldwide.",
};

export default function HindiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff5f5] via-white to-[#fffafa] px-6 py-28">

      <div className="max-w-7xl mx-auto text-center">

        <p className="text-red-600 font-bold tracking-[4px] uppercase">
          LearnGurukul Hindi Classes
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900">
          Online Hindi Classes
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Learn Hindi speaking, reading, writing, vocabulary,
          and grammar through engaging 1:1 online classes.
          Designed for students across USA, UK, Canada, Australia, India, and Africa.
        </p>

        <div className="mt-10 text-lg text-gray-700">
          <h2 className="font-bold">What we teach:</h2>
          <ul className="mt-4 space-y-2">
            <li>✔ Hindi speaking practice</li>
            <li>✔ Grammar improvement</li>
            <li>✔ Reading & writing skills</li>
            <li>✔ Vocabulary building</li>
          </ul>
        </div>

      </div>

    </main>
  );
}