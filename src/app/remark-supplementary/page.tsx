import Link from "next/link";

export default function RemarkSupplementary() {
  return (
    <section className="bg-[#0F4C5C] min-h-screen py-12 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-black mb-8">
          Remark & Supplementary Exams
        </h1>

        <p className="text-xl mb-12 max-w-3xl mx-auto">
          Not happy with your matric results? You can apply for a re-mark/re-check or register for supplementary exams (Second Chance Programme).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1a5c70] p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Re-Mark / Re-Check</h2>
            <p className="mb-6">
              If you believe there was an error in marking, apply for a re-mark or re-check of your scripts.
            </p>
            <ul className="text-left space-y-2 mb-6">
              <li>• Cost: ~R29 per subject (re-check), ~R120 per subject (re-mark)</li>
              <li>• Application deadline: Usually mid-January</li>
              <li>• Results released: Around March</li>
            </ul>
            <Link 
              href="https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/Re-markRe-check.aspx"
              className="inline-block bg-[#FF6B35] hover:bg-[#E55A2B] font-bold py-4 px-8 rounded-xl transition"
              target="_blank"
            >
              Apply for Re-Mark (Official DBE)
            </Link>
          </div>

          <div className="bg-[#1a5c70] p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Supplementary Exams</h2>
            <p className="mb-6">
              Write missed subjects or improve results (if you failed 1-2 subjects or need university entry).
            </p>
            <ul className="text-left space-y-2 mb-6">
              <li>• For candidates who failed 1 or 2 subjects</li>
              <li>• Or missed exams due to illness/special reasons</li>
              <li>• Exams in February/March or June</li>
            </ul>
            <Link 
              href="https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/SecondChanceMatricProgramme.aspx"
              className="inline-block bg-[#FF6B35] hover:bg-[#E55A2B] font-bold py-4 px-8 rounded-xl transition"
              target="_blank"
            >
              Second Chance Programme Info
            </Link>
          </div>
        </div>

        <p className="text-lg">
          Need help preparing for supplementary exams? Contact us for extra lessons or join our revision camps!
        </p>
        <Link 
          href="/contact"
          className="inline-block mt-6 text-[#FF6B35] hover:underline text-xl font-bold"
        >
          Contact TheCurveF →
        </Link>
      </div>
    </section>
  );
}