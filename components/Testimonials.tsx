"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  { name: "Leslie Alexander", image: "/assets/pure-ayurveda/test-img1.png" },
  { name: "Brooklyn Simmons", image: "/assets/pure-ayurveda/test-img2.png" },
  { name: "Leslie Alexander", image: "/assets/pure-ayurveda/test-img1.png" },
];

const testimonialText =
  "Amet minim mollit non deserunt ullamco est sit aliqua as dolor do amet. officia consequat duis enim velit mollit. Exercitation it's veam consequat sunt nostrud amet. Excepteur sint occaecat cupidatat non proident.";

export function TestimonialsSection() {
  return (
    <section className="ayur-bgcover ayur-testimonial-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <SectionHeading
              kicker="Our Testimonial"
              title="What Our Client's Say"
              className="ayur-test-head"
            />
          </div>
        </div>
        <div className="ayur-testimonial-section">
          <Swiper
            className="ayur-testimonial-slider"
            modules={[Autoplay, Navigation]}
            loop
            speed={2000}
            autoplay={{ delay: 2000 }}
            navigation={{
              nextEl: ".ayur-testimonial-section .swiper-button-next",
              prevEl: ".ayur-testimonial-section .swiper-button-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 30 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={`${item.name}-${index}`}>
                <div className="ayur-test-box">
                  <div className="ayur-test-text">
                    <p>{testimonialText}</p>
                  </div>
                  <div className="ayur-test-namesec">
                    <div className="ayur-testname">
                      <img src={item.image} alt={item.name} />
                      <h3>{item.name}</h3>
                    </div>
                    <div className="ayur-testquote">
                      <Quote size={40} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button type="button" className="swiper-button-prev" aria-label="Previous testimonial">
            <ChevronLeft size={18} />
          </button>
          <button type="button" className="swiper-button-next" aria-label="Next testimonial">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}