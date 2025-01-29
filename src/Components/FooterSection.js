import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <div>
      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mr-auto">
              <div className="widget">
                <h3>
                  About Us<span className="text-primary">.</span>{" "}
                </h3>
                <p>
                  Shyam Technologies makes it easy to get in touch for all your
                  corporate training needs. Whether you have questions about
                  courses, need customized training solutions.
                </p>
              </div>
              <div className="widget">
                <ul className="list-unstyled social">
                  <li>
                    <Link href="#">
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-linkedin"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-pinterest"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-dribbble"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 ml-auto">
              <div className="widget">
                <h3>Links</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" style={{ textDecoration: "none" }}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" style={{ textDecoration: "none" }}>
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
                    >
                      <img
                        src="images/shyam1.jpg"
                        alt=""
                        width="80"
                        height="80"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-item"
                      href="images/shyam2.jpg"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/shyam2.jpg"
                        alt=""
                        width="80"
                        height="80"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-item"
                      href="images/shyam3.jpg"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/shyam3.jpg"
                        alt=""
                        width="80"
                        height="80"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-item"
                      href="images/shyam4.jpg"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/shyam4.jpg"
                        alt=""
                        width="80"
                        height="80"
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
                    >
                      9346593339
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel://8142652799"
                      style={{ textDecoration: "none" }}
                    >
                      8142652799
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:shyamtechnologieshyd@gmail.com"
                      style={{ textDecoration: "none" }}
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
                <Link to="/" style={{ textDecoration: "none" }}>
                  HeadWay Data Systems
                </Link>
                <Link to="/"></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
