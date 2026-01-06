import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faHandshake, faWandMagicSparkles, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

export default function WhoItsFor() {
    return (
        <section id="who-its-for" className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-8">
                {/* Left-aligned Header */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-3">Who It's for</h2>
                    <p className="text-slate-500 text-lg">One platform to power every physical interaction.</p>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Museums */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all group cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center text-blue-500 mb-6 transition-colors">
                            <FontAwesomeIcon icon={faBuildingColumns} className="text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900">Museums</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Interactive info panels and immersive storytelling walls.</p>
                    </div>

                    {/* Exhibitors */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-cyan-200 transition-all group cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center text-cyan-500 mb-6 transition-colors">
                            <FontAwesomeIcon icon={faHandshake} className="text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900">Exhibitors</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Quick-deploy kiosks for lead capture and product demos.</p>
                    </div>

                    {/* Agencies */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-purple-200 transition-all group cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center text-purple-500 mb-6 transition-colors">
                            <FontAwesomeIcon icon={faWandMagicSparkles} className="text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900">Agencies</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">White-label solutions for large-scale brand activations.</p>
                    </div>

                    {/* Pavilions */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all group cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center text-blue-500 mb-6 transition-colors">
                            <FontAwesomeIcon icon={faLayerGroup} className="text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900">Pavilions</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Multi-screen synchronized displays for expo stands.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
