"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";

const achievements = [
  { value: 25, suffix: "", label: "Years Experience", image: "/assets/pure-ayurveda/achieve-icon1.png" },
  { value: 60, suffix: "", label: "Happy Customers", image: "/assets/pure-ayurveda/achieve-icon2.png" },
  { value: 800, suffix: "", label: "Our Products", image: "/assets/pure-ayurveda/achieve-icon3.png" },
  { value: 100, suffix: "%", label: "Product Purity", image: "/assets/pure-ayurveda/achieve-icon4.png", className: "percent" },
];

function CountUp({
  value,
  suffix = "",
  className = "",
  dataTo,
}: {
  value: number;
  suffix?: string;
  className?: string;
  dataTo?: string;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const start = performance.now();
        const duration = 2500;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplayValue(Math.floor(value * progress));
          if (progress < 1) requestAnimationFrame(tick);
          else setDisplayValue(value);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <h2 className={`ayur-counting ${className}`.trim()} ref={ref} data-to={dataTo}>
      {displayValue}
      {displayValue > 0 ? suffix : ""}
    </h2>
  );
}

export function AchievementsSection() {
  return (
    <section className="ayur-bgcover ayur-achievement-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <SectionHeading
              kicker="Our Recent Achievements"
              title="Benefit From Choosing The Best"
              className="ayur-heading-left"
            />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="ayur-achieve-box-wrapper">
              {achievements.map((item) => (
                <div className="ayur-achieve-box" key={item.label}>
                  <div className="ayur-achieve-icon">
                    <img src={item.image} alt={item.label} />
                  </div>
                  <div className="ayur-achieve-text">
                    <CountUp
                      value={item.value}
                      suffix={item.suffix}   {/* ✅ FIXED */}
                      className={item.className}
                      dataTo={item.className === "percent" ? `${item.value}%` : `${item.value}`}
                    />
                    <p>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}