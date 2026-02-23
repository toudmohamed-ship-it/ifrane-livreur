import { getLocale } from "next-intl/server";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import ServiceArea from "@/components/ServiceArea";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default async function HomePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <>
            <Header locale={locale} />
            <main id="main-content">
                <Hero locale={locale} />
                <About />
                <Services />
                <HowItWorks />
                <WhyUs />
                <ServiceArea />
                <Pricing />
                <Testimonials />
                <FAQ />
                <CTASection locale={locale} />
            </main>
            <Footer locale={locale} />
            <StickyWhatsApp locale={locale} />
        </>
    );
}
