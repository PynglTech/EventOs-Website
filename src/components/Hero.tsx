import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
        >
            <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center relative">
                {/* Main Heading */}
                <h1 className="text-6xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    What <span className="bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">Event-OS</span>
                    <br />
                    solve
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-normal">
                    Modular, plug-and-play event experience platform.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                    <button className="w-full sm:w-auto bg-gradient-to-r from-[#06b6d4] to-[#a855f7] text-white px-8 py-3.5 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-purple-200 transition-all transform hover:-translate-y-1">
                        Get Started Free
                    </button>
                    <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 group">
                        <FontAwesomeIcon icon={faPlay} className="text-xs" />
                        Request Demo
                    </button>
                </div>
            </div>
        </section>
    );
}
