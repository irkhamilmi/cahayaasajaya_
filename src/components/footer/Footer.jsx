import footer1 from "../../assets/image/footer-section-pattern.png";
import logo from "../../assets/image/logo-footer.svg";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer-section__shape ">
          <img src={footer1} alt="section pattern" />
        </div>
        <div className="row row--footer-main gutter-y-50">
          <div className="col-xl-4 col-lg-5 col-md-8">
            <div className="footer-section__content-block">
              <div className="footer-section__content-text">
                <div className="footer-brand">
                  <img src={logo} alt="image alt" />
                </div>
                <p>
                  Museums, markets, reindeer landscapes and dollhouses get the
                  same care and attention to purpose.
                </p>
              </div>
              <form action="#" className="newsletter-form-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                />
                <button className="submit-button icon-arrow-corner text-primary btn-reset">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="offset-xl-2 col-xl-6 offset-lg-1 col-lg-6">
            <div className="row row--list-block">
              <div className="col-auto">
                <div className="footer-contact-block">
                  <div className="single-block">
                    <h3 className="footer-title">Find us</h3>
                  </div>
                  <div className="single-block">
                    <h3 className="footer-title">get in touch</h3>
                    <ul className="list-style-regular row-gap-8">
                      <li>
                        <a href="#">+123 456789</a>
                      </li>
                      <li>
                        <a href="#">admin@arcatec.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <h3 className="footer-title">Useful Links</h3>
                <ul className="list-style-regular">
                  <li>
                    <a href="#">Pricing Plans</a>
                  </li>
                  <li>
                    <a href="#"> Projects</a>
                  </li>
                  <li>
                    <a href="#"> Press Media</a>
                  </li>
                  <li>
                    <a href="#"> Career</a>
                  </li>
                  <li>
                    <a href="#"> Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-block padding-top-140">
        <div className="container">
          <div className="copyright-row">
            <div className="copyright-text">
              <p>© 2023 Copyright Cahaya Asa Jaya </p>
            </div>
            <ul className="divider-navigation-inline footer-social-list">
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-facebook"></i>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                  <span>Youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
