import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faStopwatch, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

export default function WhyEventOS() {
    return (
        <section id="why-event-os" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-3xl -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900">Why Event-OS?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Card 1: Offline-Safe */}
                    <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 relative group">
                        <div className="absolute top-8 right-8 bg-[#22d3ee] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Reliable</div>
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] flex items-center justify-center text-white text-3xl mb-8 shadow-lg shadow-sky-200 group-hover:scale-110 transition-transform duration-300">
                            <FontAwesomeIcon icon={faWifi} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Offline-Safe</h3>
                        <p className="text-slate-500 leading-relaxed text-lg">Works perfectly without internet. All content cached locally for uninterrupted experiences.</p>
                    </div>

                    {/* Card 2: Per-Day Licensing */}
                    <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 relative group">
                        <div className="absolute top-8 right-8 bg-[#22d3ee] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Flexible</div>
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] flex items-center justify-center text-white text-3xl mb-8 shadow-lg shadow-sky-200 group-hover:scale-110 transition-transform duration-300">
                            <FontAwesomeIcon icon={faCalendarCheck} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Per-Day Licensing</h3>
                        <p className="text-slate-500 leading-relaxed text-lg">Pay only for event days you use. No monthly subscriptions or long-term commitments.</p>
                    </div>

                    {/* Card 3: Quick Setup */}
                    <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 relative group">
                        <div className="absolute top-8 right-8 bg-[#22d3ee] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Fast</div>
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] flex items-center justify-center text-white text-3xl mb-8 shadow-lg shadow-sky-200 group-hover:scale-110 transition-transform duration-300">
                            <FontAwesomeIcon icon={faStopwatch} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Quick Setup</h3>
                        <p className="text-slate-500 leading-relaxed text-lg">From configuration to deployment in under 30 minutes. No coding or technical expertise required.</p>
                    </div>

                    {/* Card 4: Multi-Device Ready */}
                    <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 relative group">
                        <div className="absolute top-8 right-8 bg-[#22d3ee] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Versatile</div>
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] flex items-center justify-center text-white text-3xl mb-8 shadow-lg shadow-sky-200 group-hover:scale-110 transition-transform duration-300">
                            <FontAwesomeIcon icon={faTabletScreenButton} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Multi-Device Ready</h3>
                        <p className="text-slate-500 leading-relaxed text-lg">Run on iPads, Android tablets, kiosks, or large touchscreens. One license, any device.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
