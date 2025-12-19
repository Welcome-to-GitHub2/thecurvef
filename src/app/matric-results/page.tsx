export default function MatricResults() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl lg:text-6xl font-black mb-8">Matric Results 2025</h1>
        <p className="text-2xl text-gray-600 mb-12">Results release: 8 January 2026</p>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <input type="text" placeholder="Enter exam number" className="w-full p-6 text-2xl text-center rounded-xl border-4 border-[#0F4C5C] mb-8" />
          <button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-black text-2xl py-6 px-12 rounded-xl">
            Check Results
          </button>
          <p className="mt-8 text-xl text-gray-600">Bookmark this page – results appear here first!</p>
        </div>
      </div>
    </section>
  );
}