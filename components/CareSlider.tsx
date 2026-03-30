"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const careSlides = [
  { title: "Eye Care", image: "/assets/pure-ayurveda/care-img1.png" },
  { title: "Hair Care", image: "/assets/pure-ayurveda/care-img2.png" },
  { title: "Skin Care", image: "/assets/pure-ayurveda/care-img3.png" },
  { title: "Men's Health", image: "/assets/pure-ayurveda/care-img4.png" },
  { title: "Women's Health", image: "/assets/pure-ayurveda/care-img5.png" },
  { title: "Memory Health", image: "/assets/pure-ayurveda/care-img6.png" },
  { title: "Beauty", image: "/assets/pure-ayurveda/care-img7.png" },
  { title: "Brain Health", image: "/assets/pure-ayurveda/care-img8.png" },
  { title: "Eye Care", image: "/assets/pure-ayurveda/care-img1.png" },
  { title: "Hair Care", image: "/assets/pure-ayurveda/care-img2.png" },
];

export function CareSlider() {
  return (
    <section className="ayur-care-slider-wrapper mt-10">
      <div className="container-fluid">
        <div className="ayur-care-slider-sec">
          <Swiper
            className="ayur-care-slider"
            modules={[Autoplay, Navigation]}
            loop
            speed={900}
            autoplay={{ delay: 2400 }}
            navigation={{
              nextEl: ".ayur-care-slider-sec .swiper-button-next",
              prevEl: ".ayur-care-slider-sec .swiper-button-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 0 },
              460: { slidesPerView: 3, spaceBetween: 0 },
              600: { slidesPerView: 4, spaceBetween: 0 },
              767: { slidesPerView: 5, spaceBetween: 0 },
              991: { slidesPerView: 6, spaceBetween: 0 },
              1024: { slidesPerView: 7, spaceBetween: 0 },
              1600: { slidesPerView: 8, spaceBetween: 10 },
              1800: { slidesPerView: 8, spaceBetween: 30 },
            }}
          >
            {careSlides.map((item, index) => (
              <SwiperSlide key={`${item.title}-${index}`}>
                <div className="ayur-careslide-box">
                  <div className="ayur-careslider-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button type="button" className="swiper-button-prev" aria-label="Previous care">
            <ChevronLeft size={20} />
          </button>
          <button type="button" className="swiper-button-next" aria-label="Next care">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}