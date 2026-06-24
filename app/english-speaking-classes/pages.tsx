export const metadata = {
  title: "Online English Speaking Classes | Bright Edu",
  description:
    "Interactive English speaking and communication classes for students worldwide.",
};

export default function EnglishPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff7f8] to-white px-6 py-28">

      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-4xl mx-auto">

          <p className="text-pink-600 font-bold tracking-[3px] uppercase">
            English Speaking
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900">
            Online English Speaking Classes
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Improve speaking confidence, grammar, vocabulary,
            pronunciation, and communication skills through
            live one-to-one online classes.
          </p>

        </div>

      </div>

    </main>
  );
}
