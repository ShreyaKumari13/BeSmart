import Image from 'next/image';

export default function RiskMeter() {
  return (
    <div className="w-full max-w-7xl mx-auto pt-8 pb-16">
      <h2 className="text-2xl font-bold text-center mb-8 ">
        The search results of BeSmart will be indicated in{" "}
        <span className="text-cyan-400">different</span> colors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* High Risk Card */}
        <div className="bg-[#FFEBEB] rounded-2xl p-6">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/image 2.png"
              alt="High Risk Meter"
              width={350}
              height={250}
              className="w-58 h-40 object-contain"
            />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2" style={{
              color: '#F3363F',
              fontFamily: 'Raleway',
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '28.18px',
              textAlign: 'center'
            }}>
              Red represents
              <br />
              &quot;High risk&quot;
            </h3>
            <p className="text-sm" style={{
                color: '#F3363F',
                fontFamily: 'Raleway',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '21.13px',
                textAlign: 'center'
              }}>
              The input information is related to scam report,
              <br />
              or high cyber security risk
            </p>
          </div>
        </div>

        {/* Medium Risk Card */}
        <div className="bg-[#FFF8DC] rounded-2xl p-6">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/image 3.png"
              alt="Medium Risk Meter"
              width={350}
              height={250}
              className="w-58 h-40 object-contain"
            />
          </div>
          <div className="text-center">
            <h3 className=" font-bold text-xl mb-2" style={{
                color: '#F7C63D',
              fontFamily: 'Raleway',
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '28.18px',
              textAlign: 'center'
            }}>
              Yellow represents
              <br />
              &quot;Possible risk&quot;
            </h3>
            <p className="text-sm" style={{
                color: '#F7C63D',
                fontFamily: 'Raleway',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '21.13px',
                textAlign: 'center'
              }}>
              Similar fraud report information is matched,
              <br />
              or medium high cyber security risk
            </p>
          </div>
        </div>

        {/* No Risk Card */}
        <div className="bg-[#D3FFD8] rounded-2xl p-6">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/image 4.png"
              alt="No Risk Meter"
              width={350}
              height={250}
              className="w-58 h-40 object-contain"
            />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2" style={{
              fontFamily: 'Raleway',
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '28.18px',
              textAlign: 'center'
            }}>
              Green means
              <br />
              &quot;No record&quot;
            </h3>
            <p className="text-sm" style={{
                color: '#54BC5D',
                fontFamily: 'Raleway',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '21.13px',
                textAlign: 'center'
              }}>
              No report, but doesn’t mean risk free.
              <br />
              You shall stay alert at all times
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}