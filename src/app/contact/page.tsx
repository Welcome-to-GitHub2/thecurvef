export default function Contact() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-black mb-12 text-[#0F4C5C]">Get In Touch</h1>

        <div className="bg-white rounded-3xl shadow-2xl p-16">
          <p className="text-2xl mb-12">We reply in under 10 minutes</p>
          <a href="https://wa.me/23058115977" className="bg-green-500 hover:bg-green-600 text-white font-black text-3xl py-8 px-16 rounded-2xl inline-block">
            Chat on WhatsApp Now
          </a>
          <div className="mt-12 text-xl text-gray-600">
            <p>Call: 076 227 4700</p>
            <p>Email: info@thecurvef.co.za</p>
          </div>
        </div>
      </div>
    </section>
  );
}