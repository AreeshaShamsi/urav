import Navbar from "../../components/ui/Navbar";
import { InnerAboutSection } from "../../components/InnerAboutSection";
import { WhyChooseSection } from "../../components/WhyChooseSection";
import { AchievementsSection } from "../../components/AchievementsSection";
import { WhySection } from "../../components/WhySection";
import { ElevateSection } from "../../components/ElevateSection";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <div className="font-sans antialiased">

        {/* Hero section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">

          {/* Background image */}
          <Image
            src="/assets/pure-ayurveda/about1.jpg"
            alt="About Us background"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Green overlay */}
          <div className="absolute inset-0 bg-[#2d5a0e]/75" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="container mx-auto px-6 text-center">

             

              {/* Main Heading */}
              <h2
                className="font-extrabold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
              >
                Healing Through the <br />
                <span className="text-[#a8d560]">Power of Nature</span>
              </h2>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-14 bg-[#a8d560]/50" />
                <div className="w-2 h-2 rounded-full bg-[#a8d560]" />
                <div className="h-px w-14 bg-[#a8d560]/50" />
              </div>

              {/* Paragraph */}
              <p
                className="text-white/75 mx-auto leading-relaxed"
                style={{ fontSize: "clamp(15px, 1.4vw, 18px)", maxWidth: "580px" }}
              >
                For over 30 years, we have been dedicated to bringing you the
                purest Ayurvedic remedies — crafted with ancient knowledge,
                grown with care, and delivered with trust.
              </p>

            </div>
          </div>

        </section>

        <InnerAboutSection />
        <WhyChooseSection />
        <ElevateSection />
        <AchievementsSection />
        <WhySection className="ayur-why-single" />
        <Footer />
      </div>
    </main>
  );
}