"use client";

export function InnerAboutSection() {
  return (
    <section className="ayur-bgcover ayur-about-sec ayur-inner-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="ayur-about-img">
              <img
                src="/assets/pure-ayurveda/about-img.png"
                alt="img"
                data-tilt=""
                data-tilt-max="10"
                data-tilt-speed="1000"
                data-tilt-perspective="1000"
              />
              <div className="ayur-about-exp">
                <p className="text-[#7CB342]">10</p>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="ayur-heading-wrap ayur-about-head">
              <h5>Who We Are</h5>
              <h3>The Natural Way To Achieving Balance And Optimal Health</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
              <a href="#" className="ayur-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ayur-bgshape ayur-about-bgshape">
        <img src="/assets/pure-ayurveda/bg-shape2.png" alt="shape" />
        <img src="/assets/pure-ayurveda/bg-leaf2.png" alt="leaf" />
      </div>
    </section>
  );
}
