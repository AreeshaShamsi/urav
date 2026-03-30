"use client";

import { SectionHeading } from "./SectionHeading";

const blogMain = [
  { image: "/assets/pure-ayurveda/blog-1.png", title: "Duis aute irure dolor in velit voluptate esse" },
  { image: "/assets/pure-ayurveda/blog-2.png", title: "Duis aute irure dolor in velit voluptate esse" },
];

const blogSide = [
  { image: "/assets/pure-ayurveda/blog-3.png", title: "Duis aute irure dolor in velit voluptate esse" },
  { image: "/assets/pure-ayurveda/blog-4.png", title: "Duis aute irure dolor in velit voluptate esse" },
  { image: "/assets/pure-ayurveda/blog-5.png", title: "Duis aute irure dolor in velit voluptate esse" },
];

export function BlogSection() {
  return (
    <section className="ayur-bgcover ayur-blog-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <SectionHeading kicker="Blog" title="Our Latest News" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row">
              {blogMain.map((item) => (
                <div className="col-lg-6 col-md-6 col-sm-12" key={item.image}>
                  <div className="ayur-blog-box">
                    <div className="ayur-blog-img">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="ayur-blog-text">
                      <div className="ayur-blog-date">
                        <h4>Ayurveda Medicine</h4>
                        <p>June 17, 2024</p>
                      </div>
                      <h3>
                        <a href="#">{item.title}</a>
                      </h3>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            {blogSide.map((item) => (
              <div className="ayur-blog-box ayur-blog-inline" key={item.image}>
                <div className="ayur-blog-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="ayur-blog-text">
                  <div className="ayur-blog-date">
                    <h4>Ayurveda Medicine</h4>
                  </div>
                  <h3>
                    <a href="#">{item.title}</a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ayur-bgshape ayur-blog-bgshape">
        <img src="/assets/pure-ayurveda/bg-shape6.png" alt="shape" />
        <img src="/assets/pure-ayurveda/bg-leaf6.png" alt="leaf" />
      </div>
    </section>
  );
}