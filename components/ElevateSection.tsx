// components/ElevateSection.tsx
"use client";

import Image from "next/image";

export function ElevateSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[420px] w-full overflow-hidden">
      
      {/* LEFT — Image */}
      <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[420px]">
        <Image
          src="/assets/pure-ayurveda/elevate_your_health.webp" // replace with your actual image
          alt="Woman tending to ayurvedic herb garden"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* RIGHT — Content */}
      <div className="w-full md:w-1/2 bg-[#c8d87a] flex items-center px-10 md:px-16 py-14">
        <div className="max-w-lg">
          
          {/* Heading */}
          <h2 className="text-[#1a2a10] text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 leading-tight">
            Elevate Your Health
          </h2>

          {/* Body text */}
          <p className="text-[#1a2a10] text-sm md:text-base leading-relaxed mb-8">
            For nearly 30 years, we have been committed to offering you the
            highest quality Ayurvedic products. Discover how Ayurvedic herbs
            can support your well-being, from{" "}
           
              herbs for sleep
            
            
              balanced energy
            
           
              gut health and digestion
            
            
            
              healthy immune system
            
            .
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-block bg-[#1a2a10] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#2a3f18] transition-colors duration-300"
          >
            Ayurveda Lifestyle Blog
          </a>
        </div>
      </div>

    </section>
  );
}
