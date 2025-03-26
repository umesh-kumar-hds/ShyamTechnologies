import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mr-auto">
              <div className="widget">
                <h3>
                  About Us<span className="text-primary">.</span>
                </h3>
                <p>
                  Shyam Technologies makes it easy to get in touch for all your
                  corporate training needs. Whether you have questions about
                  courses or need customized training solutions, we are here to
                  help.
                </p>
              </div>
              <div className="widget">
                <ul className="list-unstyled social">
                  <li>
                    <Link to="#" title="Follow us on Instagram">
                      <span
                        className="bi bi-instagram"
                        aria-hidden="true"
                      ></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Follow us on Twitter">
                      <span
                        className=" bi bi-twitter"
                        aria-hidden="true"
                      ></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Like us on Facebook">
                      <span
                        className="bi bi-facebook"
                        aria-hidden="true"
                      ></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Connect with us on LinkedIn">
                      <span
                        className="bi bi-linkedin"
                        aria-hidden="true"
                      ></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Find us on Pinterest">
                      <span
                        className="bi bi-pinterest"
                        aria-hidden="true"
                      ></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Follow us on Dribbble">
                      <span
                        className="bi bi-dribbble"
                        aria-hidden="true"
                      ></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 ml-auto">
              <div className="widget">
                <h3>Quick Links</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <Link
                      to="/"
                      style={{ textDecoration: "none" }}
                      title="Go to Home Page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      style={{ textDecoration: "none" }}
                      title="Learn more About Us"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      style={{ textDecoration: "none" }}
                      title="Get in Touch with Us"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      style={{ textDecoration: "none" }}
                      title="Read Our Blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      style={{ textDecoration: "none" }}
                      title="Explore Our Gallery"
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="widget">
                <h3>Gallery</h3>
                <ul className="instafeed instagram-gallery list-unstyled">
                  <li>
                    <a
                      className="instagram-item"
                      href="images/shyam1.jpg"
                      data-fancybox="gal"
                      title="Shyam Technologies Image 1"
                    >
                      <img
                        className="img-fluid"
                        src="images/shyam1.jpg"
                        alt="Shyam Technologies Training Session 1"
                        // width="80"
                        // height="80"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-item"
                      href="images/shyam2.jpg"
                      data-fancybox="gal"
                      title="Shyam Technologies Image 2"
                    >
                      <img
                        className="img-fluid"
                        src="images/shyam2.jpg"
                        alt="Shyam Technologies Training Session 2"
                        // width="80"
                        // height="80"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-item"
                      href="images/shyam3.jpg"
                      data-fancybox="gal"
                      title="Shyam Technologies Image 3"
                    >
                      <img
                        className="img-fluid"
                        src="images/shyam3.jpg"
                        alt="Shyam Technologies Training Session 3"
                        // width="80"
                        // height="80"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-item"
                      href="images/shyam4.jpg"
                      data-fancybox="gal"
                      title="Shyam Technologies Image 4"
                    >
                      <img
                        className="img-fluid"
                        src="images/shyam4.jpg"
                        alt="Shyam Technologies Training Session 4"
                        // width="80"
                        // height="80"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="widget">
                <h3>Contact</h3>
                <address>
                  Flat no 214, 2nd Floor, Annapurna Block, Aditya Enclave,
                  Telangana-500038.
                </address>
                <ul className="list-unstyled links mb-4">
                  <li>
                    <a
                      href="tel://9346593339"
                      style={{ textDecoration: "none" }}
                      title="Call us at 9346593339"
                    >
                      9346593339
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel://8978493733"
                      style={{ textDecoration: "none" }}
                      title="Call us at 8978493733"
                    >
                      8978493733
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:shyamtechnologieshyd@gmail.com"
                      style={{ textDecoration: "none" }}
                      title="Email us at shyamtechnologieshyd@gmail.com"
                    >
                      shyamtechnologieshyd@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="copyright">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>. All
                Rights Reserved. &mdash; Designed with love by{" "}
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  title="Visit Headway Data Systems"
                >
                  Headway Data Systems
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
