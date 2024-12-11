import Image from 'next/image';
import { Shield, Ban, Monitor } from 'lucide-react';

export default function RiskMeter() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <div className="lg:w-3/5 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4 font-raleway">
            What can I do to browse safely?
          </h2>
          <p className="text-gray-600 mb-8 font-raleway">
            Online scams cost money. These basic tips can save you from the trouble.
          </p>
          
          <div className="space-y-6">
            {/* Check website safety */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <div className="flex-shrink-0">
                <Shield className="w-8 h-8 text-[#68C5CC]" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 font-raleway">Check website safety</h3>
                <p className="text-gray-600 text-sm font-raleway">
                  Scan site URLs with the free website checker.
                </p>
              </div>
            </div>

            {/* Unsure? Don't click */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <div className="flex-shrink-0">
                <Ban className="w-8 h-8 text-[#68C5CC]" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 font-raleway">Unsure? Don&apos;t click.</h3>
                <p className="text-gray-600 text-sm font-raleway">
                  Suspicious links and online ads are often more than you bargain for.
                </p>
              </div>
            </div>

            {/* Get protection */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <div className="flex-shrink-0">
                <Monitor className="w-8 h-8 text-[#68C5CC]" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 font-raleway">Get protection for all devices</h3>
                <p className="text-gray-600 text-sm font-raleway">
                  Our all-in-one security app protects you even when you don&apos;t suspect a scam.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xs">
            <Image
              src="/images/image 9.png"
              alt="Person using a mobile device safely"
              width={400}
              height={300}
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
