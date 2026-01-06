'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Pricing() {
    const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const pricingPlans = [
        {
            name: 'Starter',
            description: 'Perfect for small booth kiosks.',
            priceINR: '1,499',
            priceUSD: '18',
            features: [
                { text: 'Up to 3 Modules', included: true },
                { text: '10GB Asset Storage', included: true },
                { text: 'Basic Analytics', included: true },
                { text: 'White-labeling', included: false }
            ],
            buttonText: 'Get Started',
        },
        {
            name: 'Pro',
            description: 'Ideal for pavilions & activations.',
            priceINR: '3,999',
            priceUSD: '48',
            features: [
                { text: 'All Standard Modules', included: true },
                { text: 'Unlimited Storage', included: true },
                { text: 'Advanced Analytics', included: true },
                { text: 'Email Support', included: true }
            ],
            buttonText: 'Buy License',
            isPopular: true
        },
        {
            name: 'Enterprise',
            description: 'For large agencies & museums.',
            priceINR: 'Custom',
            priceUSD: 'Custom',
            features: [
                { text: 'Custom Module Dev', included: true },
                { text: 'White-label Option', included: true },
                { text: 'Dedicated Success Manager', included: true },
                { text: 'SLA Support', included: true }
            ],
            buttonText: 'Request Quote',
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Simple, Per-Day Pricing</h2>

                    {/* Currency Toggle */}
                    <div className="inline-flex bg-slate-100 rounded-xl p-1">
                        <button
                            onClick={() => setCurrency('INR')}
                            className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${currency === 'INR'
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                        >
                            INR
                        </button>
                        <button
                            onClick={() => setCurrency('USD')}
                            className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${currency === 'USD'
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                        >
                            USD
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`rounded-3xl p-8 relative transition-all duration-300 cursor-pointer ${hoveredCard === index
                                    ? 'bg-slate-900 text-white shadow-2xl scale-105'
                                    : 'bg-white border-2 border-slate-200 hover:shadow-lg'
                                } ${plan.isPopular && hoveredCard !== index ? 'scale-105' : ''}`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Most Popular Badge */}
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Name & Description */}
                            <div className="mb-6">
                                <h3 className={`text-xl font-bold mb-2 transition-colors ${hoveredCard === index ? 'text-white' : 'text-slate-900'
                                    }`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm transition-colors ${hoveredCard === index ? 'text-slate-300' : 'text-slate-500'
                                    }`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                {plan.priceINR === 'Custom' ? (
                                    <div className={`text-4xl font-bold transition-colors ${hoveredCard === index ? 'text-white' : 'text-slate-900'
                                        }`}>
                                        Custom
                                    </div>
                                ) : (
                                    <div className="flex items-baseline">
                                        <span className={`text-4xl font-bold transition-colors ${hoveredCard === index ? 'text-white' : 'text-slate-900'
                                            }`}>
                                            {currency === 'INR' ? '₹' : '$'}
                                            {currency === 'INR' ? plan.priceINR : plan.priceUSD}
                                        </span>
                                        <span className={`ml-2 text-sm transition-colors ${hoveredCard === index ? 'text-slate-400' : 'text-slate-500'
                                            }`}>
                                            /day/device
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className={`mt-0.5 transition-colors ${feature.included
                                                    ? hoveredCard === index ? 'text-blue-400' : 'text-blue-500'
                                                    : 'text-slate-300'
                                                }`}
                                        />
                                        <span className={`text-sm transition-colors ${feature.included
                                                ? hoveredCard === index ? 'text-white' : 'text-slate-700'
                                                : 'text-slate-400'
                                            }`}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button className={`w-full py-3.5 rounded-xl font-bold text-base transition-all ${hoveredCard === index
                                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg'
                                    : index === 1 && hoveredCard === null
                                        ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white'
                                        : 'bg-white border-2 border-slate-200 text-slate-900 hover:bg-slate-50'
                                }`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
