import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export default function FeatureList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <section className="space-y-12">
        {/* Why Choose Section */}
        <div>
        <h2
            className={`${raleway.className} mb-6`}
            style={{
              fontFamily: 'Raleway',
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: '23.48px',
              textAlign: 'left',
              color: '#1C1C1C'
            }}
          >
            Why Choose BESMART Scam Detector?
          </h2>
          <ol className="space-y-4 list-decimal pl-5"> {/* Changed to ordered list */}
            <li>
              <p
                className={`${raleway.className}`}
                style={{
                  fontFamily: 'Raleway',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '18.79px',
                  textAlign: 'left',
                  color: '#1C1C1C'
                }}
              >
                <span className="font-semibold">Real-Time Risk Analysis:</span> Get instant alerts on potential fraud with our real-time risk analysis tool.
              </p>
            </li>
            <li>
              <p
                className={`${raleway.className}`}
                style={{
                  fontFamily: 'Raleway',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '18.79px',
                  textAlign: 'left',
                  color: '#1C1C1C'
                }}
              >
                <span className="font-semibold">Comprehensive Database:</span> Our extensive database is constantly updated with the latest scam reports, helping you stay ahead of emerging threats.
              </p>
            </li>
            <li>
              <p
                className={`${raleway.className}`}
                style={{
                  fontFamily: 'Raleway',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '18.79px',
                  textAlign: 'left',
                  color: '#1C1C1C'
                }}
              >
                <span className="font-semibold">User-Friendly Interface:</span> The Scam Detector is designed for users of all technical levels. No advanced knowledge required to use our tool!
              </p>
            </li>
            <li>
              <p
                className={`${raleway.className}`}
                style={{
                  fontFamily: 'Raleway',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '18.79px',
                  textAlign: 'left',
                  color: '#1C1C1C'
                }}
              >
                <span className="font-semibold">Protect Your Digital Identity:</span> Safeguard your online presence with a reliable fraud detection system that helps prevent phishing, scams, and other cyber threats.
              </p>
            </li>
          </ol>
        </div>

        {/* How It Works Section */}
        <div>
        <h2
            className={`${raleway.className} mb-6`}
            style={{
              fontFamily: 'Raleway',
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: '23.48px',
              textAlign: 'left',
              color: '#1C1C1C'
            }}
          >
            How It Works?
          </h2>
          <ol className="space-y-4 list-decimal pl-5">
            <li className={`${raleway.className}`}>
              <span className="font-semibold">Enter Suspicious Details:</span>{" "}
              Whether it's a phone number, website, or social media handle, simply
              type it into our Scam Detector tool.
            </li>
            <li className={`${raleway.className}`}>
              <span className="font-semibold">Risk Evaluation:</span> Our system
              cross-references the entered data with a continually updated database
              of scams and fraud attempts.
            </li>
            <li className={`${raleway.className}`}>
              <span className="font-semibold">Instant Results:</span> You'll
              receive a risk rating and a recommendation. High-risk entries will be
              flagged as potential scams, giving you a clear guide on how to
              proceed.
            </li>
          </ol>
        </div>

        {/* Empowering Section */}
        <div className="space-y-6">
          <h2
            className={`${raleway.className} mb-6`}
            style={{
              fontFamily: 'Raleway',
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '28.18px',
              textAlign: 'left',
              color: '#1C1C1C'
            }}
          >
            Empowering You to Stay Ahead of Scams.
          </h2>
          <p
            className={`${raleway.className}`}
            style={{
              fontFamily: 'Raleway',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '18.78px',
              textAlign: 'left',
            }}
          >
            At <span style={{ fontWeight: 700, color: '#1C1C1C' }}>BESMART</span>, we're committed to helping businesses and individuals navigate the digital world securely. Scams can happen to anyone, but with the right tools and awareness, you can protect yourself and your assets.
          </p>
          <p
            className={`${raleway.className}`}
            style={{
              fontFamily: 'Raleway',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '18.78px',
              textAlign: 'left',
              color: '#1C1C1C'
            }}
          >
            <span style={{ fontWeight: 700, color: '#1C1C1C' }}>Start using our Scam Detector today</span> and take the first step towards a safer online experience.
          </p>
        </div>
      </section>
    </div>
  )
}

