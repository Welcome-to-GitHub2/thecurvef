import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION - Full screen, dynamic gradient background */}
      <section className="bg-gradient-to-r from-[#0F4C5C] via-[#1a6f7f] to-[#4b93b8] min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
  {/* Parallax Background */}
  <div className="parallax-bg"></div>

  <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6c5ce7] via-[#ff6b35] to-[#6fcf97] drop-shadow-2xl">
    Ace Your Matric.<br />Get Into University.
  </h1>
  <p className="text-xl lg:text-2xl text-[#E0F2F7] mb-12 max-w-3xl">
    Free past papers, APS calculator, NBT practice & legendary camps.
  </p>
  <div className="flex flex-col sm:flex-row gap-8 z-10">
    <Link
      href="/past-papers"
      className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold py-6 px-12 rounded-xl text-2xl transition shadow-xl"
    >
      Download Past Papers →
    </Link>
    <Link
      href="/aps-calculator"
      className="bg-white text-[#0F4C5C] hover:bg-gray-100 font-bold py-6 px-12 rounded-xl text-2xl transition shadow-xl"
    >
      Calculate My APS
    </Link>
  </div>
</section>


      {/* STATS SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="text-5xl font-black text-[#FF6B35]">10 000+</div>
            <p className="text-gray-700 mt-3">Papers Downloaded</p>
          </div>
          <div>
            <div className="text-5xl font-black text-[#FF6B35]">8+</div>
            <p className="text-gray-700 mt-3">Years of Camps</p>
          </div>
          <div>
            <div className="text-5xl font-black text-[#FF6B35]">300+</div>
            <p className="text-gray-700 mt-3">Learners Placed</p>
          </div>
          <div>
            <div className="text-5xl font-black text-[#FF6B35]">100%</div>
            <p className="text-gray-700 mt-3">Free Resources</p>
          </div>
        </div>
      </section>
    </>
  );
}
