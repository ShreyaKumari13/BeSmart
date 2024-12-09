import Image from 'next/image';

export default function RiskResult() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex justify-center mb-4">
            <Image
              src="/images/image 2.png"
              alt="High Risk Meter"
              width={350}
              height={250}
              className="w-58 h-40 object-contain"
            />
          </div>

        {/* Content Section */}
        <div className="flex-1 space-y-4">
          {/* Header */}
          <h2 className="text-green-500 text-2xl font-semibold">
            No record of scam or cyber risk report was found for your query.
          </h2>

          {/* Subheader */}
          <p className="text-gray-700">
            "While no record exists, it's important to remain cautious. Follow these tips to stay safe in the digital world."
          </p>

          {/* Tips Section */}
          <div className="space-y-2">
            <p className="text-green-600 text-sm">
              Tips: You may specify search type or enter complete URL for better results.
            </p>

            {/* Security Tips List */}
            <ul className="space-y-2 text-red-500 text-sm">
              <li>• Use complete URLs or detailed information for more accurate results.</li>
              <li>• Confirm the identity of the counterparty before making payments or sharing sensitive data.</li>
              <li>• Never share login credentials, credit card data, or personal details unless you trust the platform.</li>
              <li>• Don't click on links or attachments from unknown or unverified sources.</li>
              <li>• If you suspect a scam, report it to local authorities or the e-Report Centre.</li>
            </ul>
          </div>

         
          
        </div>
      </div>
       {/* Disclaimer Section */}
      <div className="mt-8 space-y-2 text-xs text-gray-600">
            <p className="font-semibold">Disclaimer</p>
            <p>1. The results provided are for reference purposes only. Users are encouraged to exercise their own judgment and conduct independent verification.</p>
            <p>By using BeSmart, you acknowledge and agree to our Important Notice and Privacy Policy.</p>
            
            <p className="font-semibold mt-4">Personal Data (Privacy) Notice</p>
            <p>The personal data displayed on BeSmart is intended solely for the prevention and detection of crimes. Any use beyond this purpose may constitute a violation of the Personal Data (Privacy) Ordinance (Cap. 486) under the Laws of Hong Kong.</p>
          </div>
    </div>
  );
}

