import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFingerprint,
    faImages,
    faDatabase,
    faDesktop,
    faGamepad,
    faMap,
    faChartBar,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function Modules() {
    return (
        <section id="modules" className="py-24 px-8 bg-white">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-brand-blue font-bold tracking-wider text-sm uppercase mb-2 block">Features</span>
                        <h2 className="text-4xl font-bold text-slate-900">Modular by Design</h2>
                    </div>
                    <button className="text-brand-blue font-bold hover:text-brand-purple transition-colors flex items-center gap-2">
                        View All Modules <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

                {/* Grid Layout for Modules */}
                <div className="grid grid-cols-4 gap-6">
                    {/* Interact */}
                    <div className="col-span-2 bg-white rounded-3xl p-8 border border-slate-100 hover:border-brand-blue transition-all relative overflow-hidden group">
                        <div className="relative z-10">
                            <FontAwesomeIcon icon={faFingerprint} className="text-3xl text-brand-blue mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Interact</h3>
                            <p className="text-slate-500 mb-6 max-w-sm">Touch-based exploration, interactive timelines, and 3D product viewers.</p>
                            <a href="#" className="text-sm font-bold text-slate-900 underline decoration-brand-blue decoration-2 underline-offset-4">Use Module</a>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Showcase */}
                    <div className="col-span-2 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 relative overflow-hidden group">
                        <div className="relative z-10">
                            <FontAwesomeIcon icon={faImages} className="text-3xl text-brand-cyan mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Showcase</h3>
                            <p className="text-slate-400 mb-6 max-w-sm">High-fidelity media galleries and video walls.</p>
                            <a href="#" className="text-sm font-bold text-white underline decoration-brand-cyan decoration-2 underline-offset-4">Use Module</a>
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-cyan blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    </div>

                    {/* Small Modules */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                        <FontAwesomeIcon icon={faDatabase} className="text-brand-purple mb-4 text-xl" />
                        <h4 className="font-bold mb-1">Collect</h4>
                        <p className="text-xs text-slate-500">Form & Lead Gen</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                        <FontAwesomeIcon icon={faDesktop} className="text-brand-blue mb-4 text-xl" />
                        <h4 className="font-bold mb-1">Display</h4>
                        <p className="text-xs text-slate-500">Digital Signage</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                        <FontAwesomeIcon icon={faGamepad} className="text-brand-cyan mb-4 text-xl" />
                        <h4 className="font-bold mb-1">Engage</h4>
                        <p className="text-xs text-slate-500">Gamification</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                        <FontAwesomeIcon icon={faMap} className="text-indigo-500 mb-4 text-xl" />
                        <h4 className="font-bold mb-1">Guide</h4>
                        <p className="text-xs text-slate-500">Wayfinding</p>
                    </div>
                </div>

                {/* Insight Module (Full Width Strip) */}
                <div className="mt-6 bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-2xl p-8 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-blue">
                            <FontAwesomeIcon icon={faChartBar} className="text-2xl" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-1">Insight</h4>
                            <p className="text-slate-500">Real-time analytics and engagement metrics dashboard</p>
                        </div>
                    </div>
                    <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-cyan transition-colors">
                        Use Module
                    </button>
                </div>
            </div>
        </section>
    );
}
