import Link from "next/link";

export default function PastPapers() {
  return (
    <section className="bg-[#0F4C5C] min-h-screen py-12 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-black text-center mb-4">
          Free Past Papers & Memos
        </h1>
        <p className="text-xl text-center mb-12">
          NSC 2015–2024 • 100% free • Official DBE & Provincial Sources
        </p>

        <p className="text-center mb-8 text-lg">
          <Link 
            href="https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/NSCPastExaminationpapers.aspx" 
            className="text-[#FF6B35] hover:underline font-bold"
            target="_blank"
          >
            ↓ Download ALL past papers from official DBE site ↓
          </Link>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mathematics */}
          <div className="bg-[#1a5c70] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Mathematics</h2>
            <Link href="https://wcedeportal.co.za/eresource/246696" className="block text-[#FF6B35] hover:underline mb-2" target="_blank">
              2024 November Paper 1 + Memo
            </Link>
            <Link href="https://www.saexampapers.co.za/grade-12-mathematics/" className="block text-[#FF6B35] hover:underline" target="_blank">
              All years (2015–2024)
            </Link>
          </div>

          {/* Physical Sciences */}
          <div className="bg-[#1a5c70] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Physical Sciences</h2>
            <Link href="https://wcedeportal.co.za/eresource/246696" className="block text-[#FF6B35] hover:underline mb-2" target="_blank">
              2024 November Paper 1 + Memo
            </Link>
            <Link href="https://www.saexampapers.co.za/grade-12-physical-sciences/" className="block text-[#FF6B35] hover:underline" target="_blank">
              All years (2015–2024)
            </Link>
          </div>

          {/* Life Sciences */}
          <div className="bg-[#1a5c70] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Life Sciences</h2>
            <Link href="https://wcedeportal.co.za/eresource/246696" className="block text-[#FF6B35] hover:underline mb-2" target="_blank">
              2024 November Paper 1 + Memo
            </Link>
            <Link href="https://www.saexampapers.co.za/grade-12-life-sciences/" className="block text-[#FF6B35] hover:underline" target="_blank">
              All years (2015–2024)
            </Link>
          </div>

          {/* Accounting */}
          <div className="bg-[#1a5c70] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Accounting</h2>
            <Link href="https://wcedeportal.co.za/eresource/246696" className="block text-[#FF6B35] hover:underline mb-2" target="_blank">
              2024 November Paper + Memo
            </Link>
            <Link href="https://www.saexampapers.co.za/grade-12-accounting/" className="block text-[#FF6B35] hover:underline" target="_blank">
              All years (2015–2024)
            </Link>
          </div>

          {/* Business Studies */}
          <div className="bg-[#1a5c70] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Business Studies</h2>
            <Link href="https://wcedeportal.co.za/eresource/246696" className="block text-[#FF6B35] hover:underline mb-2" target="_blank">
              2024 November Paper + Memo
            </Link>
            <Link href="https://www.saexampapers.co.za/grade-12-business-studies/" className="block text-[#FF6B35] hover:underline" target="_blank">
              All years (2015–2024)
            </Link>
          </div>

          {/* Economics */}
          <div className="bg-[#1a5c70] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Economics</h2>
            <Link href="https://wcedeportal.co.za/eresource/246696" className="block text-[#FF6B35] hover:underline mb-2" target="_blank">
              2024 November Paper + Memo
            </Link>
            <Link href="https://www.saexampapers.co.za/grade-12-economics/" className="block text-[#FF6B35] hover:underline" target="_blank">
              All years (2015–2024)
            </Link>
          </div>

          {/* Geography */}
          <div className="bg-[#1a5c70] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Geography</h2>
            <Link href="https://wcedeportal.co.za/eresource/246696" className="block text-[#FF6B35] hover:underline mb-2" target="_blank">
              2024 November Paper + Memo
            </Link>
            <Link href="https://www.saexampapers.co.za/grade-12-geography/" className="block text-[#FF6B35] hover:underline" target="_blank">
              All years (2015–2024)
            </Link>
          </div>
        </div>

        <p className="text-center mt-12 text-lg">
          More subjects available on the official DBE site or{" "}
          <Link href="https://wcedeportal.co.za/past-papers" className="text-[#FF6B35] hover:underline" target="_blank">
            WCED ePortal
          </Link>
          {" "}and{" "}
          <Link href="https://www.saexampapers.co.za/" className="text-[#FF6B35] hover:underline" target="_blank">
            SA Exam Papers
          </Link>
          .
        </p>
      </div>
    </section>
  );
}