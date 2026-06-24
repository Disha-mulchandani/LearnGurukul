export const metadata = {
  title: "Online Hindi Classes | Bright Edu",
  description:
    "Interactive Hindi language classes for speaking, grammar, writing, and reading skills.",
};

export default function HindiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff5f5] via-white to-[#fffafa] px-6 py-28">

      <div className="max-w-7xl mx-auto text-center">

        <p className="text-red-600 font-bold tracking-[4px] uppercase">
          Hindi Language Classes
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900">
          Online Hindi Classes
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Improve Hindi speaking, reading, writing, vocabulary,
          and grammar through engaging one-to-one online classes
          designed for students of all levels.
        </p>

      </div>

    </main>
  );
}
