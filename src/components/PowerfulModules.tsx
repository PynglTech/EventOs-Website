'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint, faImages, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function PowerfulModules() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const modules = [
        {
            icon: faFingerprint,
            title: 'Interact',
            description: 'Touch-based exploration, interactive timelines, and 3D product viewers.'
        },
        {
            icon: faImages,
            title: 'Showcase',
            description: 'High-fidelity media galleries, video walls, and digital brochures.'
        },
        {
            icon: faChartLine,
            title: 'Insight',
            description: 'Real-time engagement heatmaps, dwell time, and user flow analytics.'
        }
    ];

    return (
        <section id="powerful-modules" className="py-20 bg-slate-50">
            <div className="max-w-[1440px] mx-auto px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Modules</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Pick the modules you need. Configure in the cloud. Deploy to any device.
                    </p>
                </div>

                {/* Module Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
                    {modules.map((module, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-8 transition-all duration-300 cursor-pointer group ${hoveredCard === index
                                    ? 'bg-slate-900 text-white shadow-xl'
                                    : 'bg-white text-slate-900 border border-slate-200 hover:shadow-lg'
                                }`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FontAwesomeIcon icon={module.icon} className="text-xl text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                            <p className={`text-sm leading-relaxed transition-colors ${hoveredCard === index ? 'text-slate-300' : 'text-slate-500'
                                }`}>
                                {module.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-full font-bold text-base transition-all transform hover:-translate-y-1">
                        View all modules
                    </button>
                </div>
            </div>
        </section>
    );
}
