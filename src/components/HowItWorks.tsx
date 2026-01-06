'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faDownload,
    faRocket,
    faPlay,
    faChartLine
} from '@fortawesome/free-solid-svg-icons';

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const steps = [
        {
            number: '01',
            icon: faCog,
            title: 'Configure',
            description: 'Set up content, branding, and modules in our cloud dashboard',
            color: 'text-blue-500',
            bgColor: 'bg-blue-50'
        },
        {
            number: '02',
            icon: faDownload,
            title: 'Download',
            description: 'Get your configured app package ready for deployment',
            color: 'text-cyan-500',
            bgColor: 'bg-cyan-50'
        },
        {
            number: '03',
            icon: faRocket,
            title: 'Deploy',
            description: 'Install on tablets, kiosks, or any device at your venue',
            color: 'text-pink-500',
            bgColor: 'bg-pink-50'
        },
        {
            number: '04',
            icon: faPlay,
            title: 'Run',
            description: 'Go live during your event with offline-ready reliability',
            color: 'text-green-500',
            bgColor: 'bg-green-50'
        },
        {
            number: '05',
            icon: faChartLine,
            title: 'Track',
            description: 'Monitor engagement and collect insights in real time',
            color: 'text-orange-500',
            bgColor: 'bg-orange-50'
        }
    ];

    return (
        <section id="how-it-works" className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">How It Works</h2>
                    <p className="text-base md:text-lg text-slate-500">Five simple steps to launch your event experience</p>
                </div>

                {/* Grid Layout - Responsive for all screen sizes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-12 max-w-7xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative">
                            {/* Number Circle Container */}
                            <div className="relative mb-6 md:mb-8">
                                {/* Connecting Line (only show on XL+ screens where we have 5 cols) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden xl:block absolute top-1/2 left-[calc(50%+32px)] right-[calc(-100%-24px+32px)] h-[2px] bg-slate-200 -translate-y-1/2 z-0"></div>
                                )}

                                {/* Number Circle */}
                                <div
                                    className={`relative w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-white border-2 flex items-center justify-center font-bold text-sm z-10 cursor-pointer transition-all duration-300 ${activeStep === index
                                            ? 'border-brand-blue bg-gradient-to-br from-brand-cyan to-brand-blue text-white scale-110 shadow-lg shadow-blue-200'
                                            : 'border-slate-200 text-slate-400 hover:border-brand-blue hover:text-brand-blue'
                                        }`}
                                    onMouseEnter={() => setActiveStep(index)}
                                    onMouseLeave={() => setActiveStep(null)}
                                >
                                    {step.number}
                                </div>
                            </div>

                            {/* Card */}
                            <div
                                className={`bg-white border rounded-2xl p-5 md:p-6 text-center transition-all duration-300 cursor-pointer min-h-[220px] flex flex-col justify-start ${activeStep === index
                                        ? 'border-brand-blue shadow-xl -translate-y-2'
                                        : 'border-slate-200 hover:shadow-lg hover:-translate-y-1'
                                    }`}
                                onMouseEnter={() => setActiveStep(index)}
                                onMouseLeave={() => setActiveStep(null)}
                            >
                                <div className={`w-11 h-11 md:w-12 md:h-12 ${step.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all ${activeStep === index ? 'scale-110' : ''
                                    }`}>
                                    <FontAwesomeIcon icon={step.icon} className={`text-lg md:text-xl ${step.color}`} />
                                </div>
                                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all transform hover:-translate-y-1">
                        Try configuration
                    </button>
                </div>
            </div>
        </section>
    );
}
