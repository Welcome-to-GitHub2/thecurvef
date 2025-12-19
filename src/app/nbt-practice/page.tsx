export default function NBTPractice() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-black mb-12 text-[#0F4C5C]">NBT Practice Hub</h1>
        <p className="text-2xl text-gray-600 mb-16">Free practice questions • Timed tests • Explanations</p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <a href="https://www.nbt.ac.za/content/preparing-your-learners-0" className="bg-white rounded-3xl shadow-2xl p-12 hover:shadow-3xl transition">
            <h3 className="text-3xl font-black text-[#0F4C5C] mb-4">Quantitative Literacy (QL)</h3>
            <p className="text-xl text-gray-600 mb-8">Reading, reasoning & data interpretation</p>
            <p className="text-[#FF6B35] font-bold text-2xl">Free Official Examples →</p>
          </a>

          <a href="https://www.nbt.ac.za/sites/default/files/MAT_ExemplarQuestions.pdf" className="bg-white rounded-3xl shadow-2xl p-12 hover:shadow-3xl transition">
            <h3 className="text-3xl font-black text-[#0F4C5C] mb-4">Mathematics (MAT)</h3>
            <p className="text-xl text-gray-600 mb-8">Algebra, geometry, trig & calculus</p>
            <p className="text-[#FF6B35] font-bold text-2xl">Free Official Examples →</p>
          </a>
        </div>

        <p className="mt-20 text-xl text-gray-600">More practice coming soon!</p>
      </div>
    </section>
  );
}