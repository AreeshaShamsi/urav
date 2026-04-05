"use client";

import { useEffect } from "react";
import Image from "next/image";

import Navbar from "./ui/Navbar";
import { CareSlider } from "./CareSlider";
import { TopProducts } from "./TopProducts";
import { AchievementsSection } from "./AchievementsSection";
import { TrendingProducts } from "./TrendingProducts";
import { WhySection } from "./WhySection";
import { TestimonialsSection } from "./Testimonials";
import { BlogSection } from "./Blog";
import { ElevateSection } from "./ElevateSection";
import Footer from "./ui/Footer";

// ❗ Make sure this file exists OR remove usage below
import { AboutSection } from "./WhoWeAre";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .reveal-fade")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function PureAyurvedaHome() {
  useScrollReveal();

  return (
    <main>
      <Navbar />

      <div className="font-sans antialiased">
        {/* HERO SECTION */}
        <section className="relative min-h-screen bg-[#2d5a0e]/75 overflow-hidden">
          {/* Background */}
          <div className="hero-bg absolute inset-0 z-0">
            <Image
              src="/assets/pure-ayurveda/green_bg.jpg"
              alt="background leaf"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 pt-28 sm:pt-36 pb-0 flex flex-col items-center">

            {/* Centered text */}
            <div className="text-center mb-8 sm:mb-10">
              <h1 className="hero-title text-white font-extrabold leading-tight mb-4 sm:mb-5">
                <span className="block text-[1.75rem] xs:text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl">
                  We Are Here To Give You The Best
                </span>
                <span className="block text-[1.75rem] xs:text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl text-[#7CB342]">
                  Herb Products
                </span>
              </h1>

              <p className="hero-sub text-white/70 text-[12.5px] sm:text-sm lg:text-base max-w-[280px] sm:max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                We bring you authentic Ayurvedic products crafted with
                time-tested ingredients to promote wellness, balance, and a
                healthier way of living.
              </p>

              <button className="hero-btn bg-white text-[#7CB342] font-semibold text-[13px] sm:text-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-gray-100 transition">
                Explore Our Products
              </button>
            </div>

            {/* Product Image */}
            <div className="hero-img relative w-full h-[220px] xs:h-[260px] sm:h-[380px] md:h-[420px] lg:h-[440px] mt-0 sm:-mt-10 lg:-mt-20">
              <Image
                src="/assets/pure-ayurveda/products.png"
                alt="Product group"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </section>

        <CareSlider />
        <TopProducts />
        <AboutSection />
        <AchievementsSection />
        <TrendingProducts />
        <WhySection />
        <ElevateSection />
        <TestimonialsSection />
        <BlogSection />
        <Footer />
      </div>
    </main>
  );
}