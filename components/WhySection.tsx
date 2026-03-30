"use client";

import { useState } from "react";
import { CheckCircle, X, Play } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const whyItems = [
  { title: "100 % Organic", text: "Duis aute irure dolor in reprehenderit in voluptate velit", image: "/assets/pure-ayurveda/why-icon1.png" },
  { title: "Best Quality", text: "Duis aute irure dolor in reprehenderit in voluptate velit", image: "/assets/pure-ayurveda/why-icon2.png" },
  { title: "Hygienic Product", text: "Duis aute irure dolor in reprehenderit in voluptate velit", image: "/assets/pure-ayurveda/why-icon3.png" },
  { title: "Health Care", text: "Duis aute irure dolor in reprehenderit in voluptate velit", image: "/assets/pure-ayurveda/why-icon4.png" },
];

export function WhySection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="ayur-bgcover ayur-why-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <SectionHeading kicker="Best For You" title="Why Pure Ayurveda" className="ayur-why-head" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="ayur-why-secbox">
              {whyItems.map((item) => (
                <div className="ayur-why-box" key={item.title}>
                  <div className="ayur-why-boxicon">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="ayur-why-boxtext">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="ayur-why-textheading">
              <h3>Solve Your Problem with The Power of Nature</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul>
                {Array.from({ length: 4 }).map((_, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <p>Quis nostrud was exercitation.</p>
                  </li>
                ))}
              </ul>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <div className="ayur-why-btn">
                <a href="#" className="ayur-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="ayur-video-section">
              <div className="ayur-video-img">
                <img src="/assets/pure-ayurveda/video-bg.png" alt="video" />
                <button
                  type="button"
                  className="ayur-video-playicon"
                  onClick={() => setVideoOpen(true)}
                  aria-label="Open video"
                >
                  <Play size={28} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {videoOpen && (
        <div className="ayur-popup" onClick={() => setVideoOpen(false)}>
          <div className="ayur-popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <iframe
              src="/assets/pure-ayurveda/hJTmi9euoNg.html"
              title="Pure Ayurveda video"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className="ayur-bgshape ayur-why-bgshape">
        <img src="/assets/pure-ayurveda/bg-shape4.png" alt="shape" />
        <img src="/assets/pure-ayurveda/bg-leaf4.png" alt="leaf" />
      </div>
    </section>
  );
}