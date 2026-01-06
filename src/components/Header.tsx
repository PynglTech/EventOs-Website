import Image from 'next/image';

export default function Header() {
    return (
        <header id="header" className="fixed top-0 w-full z-50 glass-nav h-20 transition-all duration-300">
            <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center justify-between">
                {/* Logo */}
                <div id="logo" className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/Asset 1@5x.png"
                        alt="Event-OS Logo"
                        width={150}
                        height={40}
                        className="h-10 w-auto"
                        priority
                    />
                </div>

                {/* Nav */}
                <nav className="hidden xl:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#" className="text-brand-blue hover:text-brand-purple transition-colors">Home</a>
                    <a href="#modules" className="hover:text-brand-blue transition-colors">Modules</a>
                    <a href="#how-it-works" className="hover:text-brand-blue transition-colors">How It Works</a>
                    <a href="#pricing" className="hover:text-brand-blue transition-colors">Pricing</a>
                    <a href="#templates" className="hover:text-brand-blue transition-colors">Templates</a>
                    <a href="#docs" className="hover:text-brand-blue transition-colors">Docs</a>
                    <a href="#agencies" className="hover:text-brand-blue transition-colors">For Agencies</a>
                </nav>

                {/* Right CTAs */}
                <div className="flex items-center gap-4">
                    <button className="text-sm font-semibold px-4 py-2 text-slate-600 hover:text-brand-blue transition-colors">
                        Login
                    </button>
                    <button className="bg-brand-gradient hover:bg-brand-gradient-hover text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
}
