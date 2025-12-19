export default function NSFAS() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-black mb-12">NSFAS, Bursaries & Scholarships 2026</h1>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h3 className="text-3xl font-black text-[#0F4C5C] mb-6">NSFAS Application</h3>
            <p className="text-xl mb-8">Opens January 2026 • Up to R420 000 funding</p>
            <a href="https://www.nsfas.org.za" className="bg-[#FF6B35] text-white px-8 py-4 rounded-xl font-bold">Apply Now →</a>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h3 className="text-3xl font-black text-[#0F4C5C] mb-6">Top Bursaries</h3>
            <ul className="text-left text-lg space-y-3">
              <li>Funza Lushaka (Teaching)</li>
              <li>Department of Agriculture</li>
              <li>Allan Gray Fellowship</li>
              <li>Mining Qualifications Authority</li>
            </ul>
          </div>

          <div className="bg-[#0F4C5C] text-white rounded-3xl shadow-2xl p-10">
            <h3 className="text-3xl font-black mb-6">Need Help Applying?</h3>
            <p className="text-xl mb-8">We fill NSFAS & bursary forms correctly</p>
            <p className="text-4xl font-black mb-8">Only R150</p>
            <a href="https://wa.me/27YOUR_NUMBER" className="bg-white text-[#0F4C5C] px-10 py-5 rounded-xl font-black text-xl">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}