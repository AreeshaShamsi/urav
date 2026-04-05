"use client";

export function SubscribeSection() {
  return (
    <section className="ayur-footer-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="ayur-sign-head">
              <h3>Sign Up To Get Updates & News About Us..</h3>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <form className="ayur-subscribe-sec">
              <div className="ayur-form-input">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email..."
                  name="email"
                />
              </div>
              <div className="ayur-form-btn">
                <a href="#" className="ayur-btn">
                  Subscribe
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
