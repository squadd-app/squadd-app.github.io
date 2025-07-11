// pages/index.js
import Head from "next/head";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>SQUADD – AI-Powered TikTok Collab Management</title>
        <meta name="description" content="Supercharge your TikTok deals and collaborations with SQUADD – the AI-powered platform for creators and agencies." />
      </Head>
      <main className="bg-[#f5f6fa] dark:bg-[#121212] min-h-screen transition-colors">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
