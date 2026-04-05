"use client";

const bulletPoints = [
  "100% Organic & Naturally Sourced Ingredients",
  "Digital Laboratory Precision & Quality Control",
  "Hygienic Production with GMP Certified Facilities",
  "Quality Tested & Clinically Verified Formulas",
];

const ripples = [
  { size: 92, opacity: 0.08 },
  { size: 72, opacity: 0.12 },
  { size: 50, opacity: 0.17 },
  { size: 28, opacity: 0.23 },
];

export function WhyChooseSection() {
  return (
    <>
      {/* Google Fonts import */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lato:wght@400;500;600;700&display=swap');`}</style>

      <section className="bg-white py-[72px] font-['Lato',sans-serif]">
        <div className="container mx-auto px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row">

            {/* ── LEFT: 3-circle image layout ── */}
            <div className="w-full lg:w-[480px] shrink-0">
              <div className="relative h-[560px] w-full">

                {/* TOP circle — green outer ring */}
                <div
                  className="pointer-events-none absolute rounded-full border-2 border-[#4a8c1c]"
                  style={{ top: 14, left: "5%", width: 292, height: 292, opacity: 0.75 }}
                />
                {/* TOP circle image */}
                <div
                  className="absolute overflow-hidden rounded-full border-4 border-white shadow-[0_8px_32px_rgba(90,158,30,0.18)]"
                  style={{ top: 28, left: "calc(5% + 14px)", width: 264, height: 264 }}
                >
                  <img
                    src="/assets/pure-ayurveda/spices.avif"
                    alt="Ayurvedic bowl"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>

                {/* Dark hollow rings — top right of top circle */}
                <div
                  className="pointer-events-none absolute rounded-full border-[1.5px] border-[#2c2c4a]"
                  style={{ top: 20, left: "calc(5% + 210px)", width: 22, height: 22, opacity: 0.55 }}
                />
                <div
                  className="pointer-events-none absolute rounded-full border-[1.5px] border-[#2c2c4a]"
                  style={{ top: 6, left: "calc(5% + 238px)", width: 48, height: 48, opacity: 0.40 }}
                />

                {/* Concentric ripple rings — right-anchored to avoid overflow */}
                {ripples.map(({ size, opacity }, i) => (
                  <div
                    key={i}
                    className="pointer-events-none absolute rounded-full border border-[#4a8c1c]"
                    style={{
                      top: 111 + i * 22,
                      right: i * 8,
                      width: size,
                      height: size,
                      opacity,
                    }}
                  />
                ))}

                {/* Small dark hollow rings — lower left area */}
                <div
                  className="pointer-events-none absolute rounded-full border-[1.5px] border-[#2c2c4a]"
                  style={{ top: 334, left: 4, width: 30, height: 30, opacity: 0.50 }}
                />
                <div
                  className="pointer-events-none absolute rounded-full border-[1.5px] border-[#2c2c4a]"
                  style={{ top: 368, left: 18, width: 16, height: 16, opacity: 0.35 }}
                />

                {/* BOTTOM-LEFT circle — outer ring */}
                <div
                  className="pointer-events-none absolute rounded-full border-2 border-[#4a8c1c]"
                  style={{ bottom: 24, left: 0, width: 228, height: 228, opacity: 0.70 }}
                />
                {/* BOTTOM-LEFT image */}
                <div
                  className="absolute overflow-hidden rounded-full border-4 border-white shadow-[0_8px_32px_rgba(90,158,30,0.15)]"
                  style={{ bottom: 36, left: 14, width: 200, height: 200 }}
                >
                  <img
                    src="/assets/pure-ayurveda/spoon.jpg"
                    alt="Herbal ingredients"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>

                {/* BOTTOM-RIGHT circle — outer ring */}
                <div
                  className="pointer-events-none absolute rounded-full border-2 border-[#4a8c1c]"
                  style={{ bottom: 24, left: "36%", width: 228, height: 228, opacity: 0.70 }}
                />
                {/* BOTTOM-RIGHT image */}
                <div
                  className="absolute overflow-hidden rounded-full border-4 border-white shadow-[0_8px_32px_rgba(90,158,30,0.15)]"
                  style={{ bottom: 36, left: "calc(36% + 14px)", width: 200, height: 200 }}
                >
                  <img
                    src="/assets/pure-ayurveda/spice1.jpg"
                    alt="Essential oils"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>

                {/* Dashed arc SVG — connects bottom two circles */}
                <svg
                  className="pointer-events-none absolute"
                  style={{ bottom: 106, left: "13%", width: "57%", height: 56 }}
                  viewBox="0 0 260 56"
                  fill="none"
                >
                  <path
                    d="M 10 50 Q 130 -4 250 50"
                    stroke="#4a8c1c"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    opacity="0.4"
                  />
                </svg>

              </div>
            </div>

            {/* ── RIGHT: Text content ── */}
            <div className="w-full lg:flex-1 lg:min-w-[300px]">

              {/* Subtitle */}
              <h5 className="mb-[14px] text-[13px] font-bold uppercase tracking-[0.08em] text-[#5a9e1e]">
                Welcome To Best Herbal &amp; Ayurveda Store
              </h5>

              {/* Heading — uniform size and color */}
              <h2
                className="mb-5 text-[clamp(30px,4vw,42px)] font-extrabold leading-[1.22] text-[#1a2a10]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                We&apos;re Lanced Most Powerful Treatment System
              </h2>

              {/* Body text */}
              <p className="mb-7 max-w-[480px] text-[15px] leading-[1.8] text-[#555]">
                Experience the ancient wisdom of Ayurveda with our carefully curated
                herbal formulations. Each product is crafted with the purest ingredients,
                blending tradition and modern science to support your holistic well-being.
              </p>

              {/* Bullet list */}
              <ul className="mb-9 list-none space-y-3 p-0">
                {bulletPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-[15px] font-medium text-[#333]"
                  >
                    <span className="inline-block h-[9px] w-[9px] shrink-0 rounded-full bg-[#1a2a10]" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#"
                className="inline-block rounded-full bg-[#5a9e1e] px-10 py-[14px] text-[15px] font-semibold tracking-[0.04em] text-white no-underline shadow-[0_4px_18px_rgba(90,158,30,0.28)] transition-all duration-200 hover:bg-[#3d7a0e] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(90,158,30,0.38)]"
              >
                Read More
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}