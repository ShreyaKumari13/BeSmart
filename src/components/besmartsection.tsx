import Image from "next/image";
import React from "react";
import { Search, CheckCircle, Zap, User } from 'lucide-react';

interface FeatureItem {
    icon: React.ReactNode;
    title: string[];
}

interface WhyChooseItem {
    id: number;
    title: string;
    description: string;
}

const BeSmartSection: React.FC = () => {
    const features: FeatureItem[] = [
        {
            icon: <Search className="w-12 h-12 text-[#68C5CC]" />,
            title: ["Spot scams", "in seconds."]
        },
        {
            icon: <CheckCircle className="w-12 h-12 text-[#68C5CC]" />,
            title: ["Hassle-free", "scam detection."]
        },
        {
            icon: <Zap className="w-12 h-12 text-[#68C5CC]" />,
            title: ["Stay ahead", "of threats."]
        },
        {
            icon: <User className="w-12 h-12 text-[#68C5CC]" />,
            title: ["Simple, but", "powerful."]
        }
    ];

    const whyChooseItems: WhyChooseItem[] = [
        {
            id: 1,
            title: "Real-Time Risk Analysis",
            description: "Get instant alerts on potential fraud with our real-time risk analysis tool."
        },
        {
            id: 2,
            title: "Comprehensive Database",
            description: "Our extensive database is constantly updated with the latest scam reports, helping you stay ahead of emerging threats."
        },
        {
            id: 3,
            title: "User-Friendly Interface",
            description: "The Scam Detector is designed for users of all technical levels. No advanced knowledge required to use our tool!"
        },
        {
            id: 4,
            title: "Protect Your Digital Identity",
            description: "Safeguard your online presence with a reliable fraud detection system that helps prevent phishing, scams, and other cyber threats."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto">
            {/* Features Row */}
            <div className="w-full p-12 mb-8 bg-white rounded-bl-2xl rounded-br-2xl shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 justify-center">
                            {feature.icon}
                            <div>
                                {feature.title.map((line, i) => (
                                    <p key={i} className="text-[#68C5CC] font-raleway text-2xl font-bold leading-tight">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="text-3xl font-bold mt-8 bg-[#68C5CC] p-2 inline-block rounded m-4 text-white font-raleway">
                BeSmart
            </h2>
            <div className="h-[1px] bg-[#68C5CC] mb-5" />

            <div className="px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* What is BESMART Card */}
                    <div className="bg-[#E5F6F8] rounded-3xl p-6">
                        <div className="mb-6">
                            <Image
                                src="/images/image 6.png"
                                alt="Person analyzing content on phone"
                                width={325}
                                height={225}
                                className="rounded-xl w-full object-cover"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-center font-raleway">
                            What is BESMART Scam Detector?
                        </h2>
                        <p className="text-center font-raleway text-base leading-relaxed">
                            At <span className="font-bold">BESMART</span>, we believe in empowering businesses and individuals to protect themselves from the ever-evolving threat of online scams. Our <span className="font-bold">Scam Detector</span> is a cutting-edge tool designed to help you evaluate suspicious digital content—be it phone numbers, websites, emails, or social media profiles—so you can make informed decisions and stay safe in the digital world.
                        </p>
                    </div>

                    {/* What We Do Card */}
                    <div className="bg-[#E5F6F8] rounded-3xl p-6">
                        <div className="mb-6">
                            <Image
                                src="/images/image 7.png"
                                alt="Laptop showing fraud alert"
                                width={400}
                                height={300}
                                className="rounded-xl w-full object-cover"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-center font-raleway">
                            What We Do?
                        </h2>
                        <p className="text-center font-raleway text-base leading-relaxed">
                            Our <span className="font-semibold">Scam Detector</span> uses advanced algorithms to analyze potential scam activities. Simply enter the suspicious details into our tool, and within seconds, our system will give you an evaluation and risk rating, helping you avoid falling victim to fraud. Whether you're unsure about a link in an email or a phone call, our tool gives you the peace of mind to know whether it's a legitimate interaction or a scam.
                        </p>
                    </div>
                </div>

                {/* Why Choose BESMART Card */}
                <div className="bg-[#E5F6F8] rounded-3xl p-8 mt-6">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3">
                            <Image
                                src="/images/image 8.png"
                                alt="Why Choose Us clipboard"
                                width={260}
                                height={234}
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold mb-8 font-raleway text-center">
                                Why Choose BESMART Scam Detector?
                            </h2>
                            <div className="space-y-6">
                                {whyChooseItems.map((item) => (
                                    <div key={item.id} className="flex gap-3 text-center justify-center">
                                        <span className="font-bold text-lg">{item.id}.</span>
                                        <p className="text-gray-800 font-raleway">
                                            <span className="font-bold text-lg">{item.title}:</span> {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="mt-8 bg-[#E5F6F8] rounded-3xl p-8">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold mb-8 font-raleway text-center">
                                How It Works?
                            </h2>
                            <ol className="space-y-6">
                                <li className="flex gap-3">
                                    <span className="font-bold text-lg">1.</span>
                                    <span className="font-raleway font-medium">
                                        <span className="font-bold">Enter Suspicious Details:</span> Whether it's a phone number, website, or social media handle, simply type it into our Scam Detector tool.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-lg">2.</span>
                                    <span className="font-raleway font-medium">
                                        <span className="font-bold">Risk Evaluation:</span> Our system cross-references the entered data with a continually updated database of scams and fraud attempts.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-lg">3.</span>
                                    <span className="font-raleway font-medium">
                                        <span className="font-bold">Instant Results:</span> You'll receive a risk rating and a recommendation. High-risk entries will be flagged as potential scams, giving you a clear guide on how to proceed.
                                    </span>
                                </li>
                            </ol>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src="/images/image (1).png"
                                alt="Email with fishing hook illustration"
                                width={300}
                                height={300}
                                className="w-auto h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeSmartSection;

