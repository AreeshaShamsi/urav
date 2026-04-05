"use client";

import { useEffect, useRef } from "react";

export function ContactSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Animation styles injected once */}
      <style>{`
        .anim-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .anim-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s,
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }
        .anim-visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        /* Staggered field animations */
        .field-anim {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .anim-visible .field-anim:nth-child(1) { transition-delay: 0.25s; opacity: 1; transform: none; }
        .anim-visible .field-anim:nth-child(2) { transition-delay: 0.35s; opacity: 1; transform: none; }
        .anim-visible .field-anim:nth-child(3) { transition-delay: 0.45s; opacity: 1; transform: none; }
        .anim-visible .field-anim:nth-child(4) { transition-delay: 0.55s; opacity: 1; transform: none; }
        .anim-visible .field-anim:nth-child(5) { transition-delay: 0.65s; opacity: 1; transform: none; }

        /* Input focus ring */
        .contact-input:focus {
          border-color: #5a9e1e;
          box-shadow: 0 0 0 3px rgba(90,158,30,0.12);
        }

        /* Button pulse on hover */
        .submit-btn {
          position: relative;
          overflow: hidden;
        }
        .submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .submit-btn:hover::after {
          transform: translateX(0);
        }

        /* Float animation for image */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        .img-float {
          animation: float 5s ease-in-out infinite;
        }

        /* Glow ring pulse */
        @keyframes ring-pulse {
          0%, 100% { transform: scale(1);   opacity: 0.18; }
          50%       { transform: scale(1.08); opacity: 0.10; }
        }
        .glow-ring {
          animation: ring-pulse 4s ease-in-out infinite;
        }
      `}</style>

      <section className="bg-[#f8fdf3] py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">

            {/* ── LEFT: Contact Form (slides in from left) ── */}
            <div ref={leftRef} className="anim-left w-full lg:w-1/2">
              <div className="bg-white rounded-2xl p-10 shadow-[0_8px_48px_rgba(90,158,30,0.10)]">

                {/* Heading */}
                <div className="field-anim mb-8">
                  <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#5a9e1e] mb-2">
                    Get In Touch
                  </p>
                  <h2
                    className="text-[#1a2a10] font-extrabold text-[28px] leading-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Send Us A Message
                  </h2>
                </div>

                {/* Row 1 */}
                <div className="field-anim flex flex-col sm:flex-row gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="contact-input flex-1 bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="contact-input flex-1 bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-200"
                  />
                </div>

                {/* Row 2 */}
                <div className="field-anim flex flex-col sm:flex-row gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="contact-input flex-1 bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-200"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="contact-input flex-1 bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-200"
                  />
                </div>

                {/* Textarea */}
                <div className="field-anim mb-6">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="contact-input w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="field-anim">
                  <button
                    type="submit"
                    className="submit-btn bg-[#5a9e1e] hover:bg-[#4a8c12] text-white font-semibold text-sm px-10 py-4 rounded-xl transition-colors duration-300 shadow-[0_4px_18px_rgba(90,158,30,0.30)]"
                  >
                    Send Message
                  </button>
                </div>

              </div>
            </div>

            {/* ── RIGHT: Image (slides in from right) ── */}
            <div ref={rightRef} className="anim-right w-full lg:w-1/2 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-full max-w-[480px]">

                {/* Decorative glow ring behind image */}
                <div className="glow-ring absolute w-[380px] h-[380px] rounded-full bg-[#5a9e1e]/10 blur-2xl" />
                <div
                  className="glow-ring absolute w-[300px] h-[300px] rounded-full border-2 border-[#5a9e1e]/20"
                  style={{ animationDelay: "0.5s" }}
                />

                {/* Floating image */}
                <img
                  src="/assets/pure-ayurveda/products-packet.png"
                  alt="Ayurvedic products"
                  className="img-float relative z-10 w-full max-w-[420px] object-contain drop-shadow-[0_24px_48px_rgba(90,158,30,0.22)]"
                />

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}