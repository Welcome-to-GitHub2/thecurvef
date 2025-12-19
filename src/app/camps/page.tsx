export default function Camps() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-black mb-8">Our Legendary Camps</h1>
        <p className="text-2xl text-gray-600 mb-16">Winter • Spring • December Bootcamps</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="bg-gray-200 border-2 border-dashed rounded-xl h-64" />
          ))}
        </div>

        <div className="bg-[#0F4C5C] text-white py-16 px-10 rounded-3xl">
          <h2 className="text-4xl font-black mb-6">2026 Winter Camp Booking Open</h2>
          <p className="text-2xl mb-8">R3 500 all inclusive • Limited spots</p>
          <a href="https://wa.me/23058115977" className="bg-[#FF6B35] text-white font-black text-xl py-6 px-12 rounded-xl">
            Book on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}