import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function BuiltBy() {
    return (
        <section
            id="built-by"
            className="py-24 relative overflow-hidden"
            style={{
                backgroundImage: 'url(/cta-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>

            <div className="max-w-[1440px] mx-auto px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Title with Styled Text */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Built by{' '}
                        <span className="inline-flex items-baseline tracking-[0.1em] md:tracking-[0.2em] uppercase whitespace-nowrap">
                            <span style={{ fontFamily: "'Arial Narrow', Arial, sans-serif", fontWeight: 300 }}>EX</span>
                            <span style={{ fontFamily: "Arial, sans-serif", fontWeight: 550 }}>PERIEN</span>
                            <span style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: 900 }}>CIOUS</span>
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-slate-600 mb-10">
                        Modular, plug-and-play event experience platform.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                        <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold text-base transition-all transform hover:-translate-y-1">
                            Get start
                        </button>
                        <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-10 py-4 rounded-xl font-semibold text-base hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 group">
                            <FontAwesomeIcon icon={faPlay} className="text-xs" />
                            Request Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
