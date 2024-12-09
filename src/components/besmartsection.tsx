import Image from "next/image";
import React from "react";

const BeSmartSection: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2
                className="text-3xl font-bold mt-8"
                style={{
                    fontFamily: 'Raleway',
                    fontSize: '35px',
                    fontWeight: 700,
                    lineHeight: '41.09px',
                    textAlign: 'left',
                    color: '#68C5CC'
                }}
            >
                BeSmart
            </h2> {/* Heading at the top */}
            <div style={{
                height: '1px',
                backgroundColor: '#68C5CC',
                marginBottom: '20px'
            }} />
            <section className="flex flex-col md:flex-row items-center md:items-start">
                {/* Left Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                        <Image
                            src="/images/image (1).png" // Replace with your email image file
                            alt="Email icon"
                            width={393}
                            height={498}
                            className="rounded"
                        />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="md:w-1/2  ">
                    <div className=" flex justify-center">
                        <Image
                            src="/images/image 4.png" // Replace with your risk meter image file
                            alt="Risk Meter"
                            width={150}
                            height={50}
                        />
                    </div>
                    <h3
                        className="mb-4"
                        style={{
                            fontFamily: 'Raleway',
                            fontSize: '20px',
                            fontWeight: 600,
                            lineHeight: '23.48px',
                            textAlign: 'left',
                            color: '#1C1C1C'
                        }}
                    >
                        The Ultimate Scam and Fraud Detection Tool
                    </h3>
                    <p
                        className="text-gray-700 mb-4"
                        style={{
                            fontFamily: 'Raleway',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '18.78px',
                            textAlign: 'left',
                        }}
                    >
                        At <span style={{ fontWeight: 700 }}>BESMART</span> Scam Detector, we believe in empowering businesses and individuals to protect themselves from the ever-evolving threat of online scams. Our Scam Detector is a cutting-edge tool designed to help you evaluate suspicious digital content—be it phone numbers, websites, emails, or social media profiles—so you can make informed decisions and stay safe in the digital world.
                    </p>
                    <h4
                        className="mb-2"
                        style={{
                            fontFamily: 'Raleway',
                            fontSize: '20px',
                            fontWeight: 600,
                            lineHeight: '23.48px',
                            textAlign: 'left',
                            color: '#1C1C1C'
                        }}
                    >
                        What We Do
                    </h4>
                    <p
                        className="text-gray-700"
                        style={{
                            fontFamily: 'Raleway',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '18.78px',
                            textAlign: 'left',
                            textDecoration: 'none', // No underline
                        }}
                    >
                        Our Scam Detector uses advanced algorithms to analyze potential scam activities. Simply enter the suspicious details into our tool, and within seconds, our system will give you an evaluation and risk rating, helping you avoid falling victim to fraud. Whether you’re unsure about a link in an email or a phone call, our tool gives you the peace of mind to know whether it’s a legitimate interaction or a scam.
                    </p>

                </div>
            </section>
        </div>
    );
};

export default BeSmartSection;