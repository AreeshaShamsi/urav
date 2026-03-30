"use client";

export function AboutSection() {
  return (
    <section className="ayur-bgcover ayur-about-sec">
      <div className="container">
        <div className="row">
          
          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="ayur-about-img">
              <img
                src="/assets/pure-ayurveda/about-img.png"
                alt="About Pure Ayurveda"
              />
              <div className="ayur-about-exp">
                <p className="text-green-800">4+</p>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="ayur-heading-wrap ayur-about-head">
              
              <h5>Who We Are</h5>

              <h3 className="leading-tight">
                The Natural Way To Achieving Balance And Optimal Health
              </h3>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* BUTTON (FIXED) */}
              <div className="ayur-why-btn">
                <a href="#" className="ayur-btn">
                  Read More
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* BACKGROUND SHAPES */}
      <div className="ayur-bgshape ayur-about-bgshape">
        <img src="/assets/pure-ayurveda/bg-shape2.png" alt="shape" />
        <img src="/assets/pure-ayurveda/bg-leaf2.png" alt="leaf" />
      </div>
    </section>
  );
}