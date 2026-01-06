import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhoItsFor from '@/components/WhoItsFor';
import PowerfulModules from '@/components/PowerfulModules';
import HowItWorks from '@/components/HowItWorks';
import WhyEventOS from '@/components/WhyEventOS';
import Pricing from '@/components/Pricing';
import BuiltBy from '@/components/BuiltBy';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <WhoItsFor />
                <PowerfulModules />
                <HowItWorks />
                <WhyEventOS />
                <Pricing />
                <BuiltBy />
            </main>
            <Footer />
        </>
    );
}
