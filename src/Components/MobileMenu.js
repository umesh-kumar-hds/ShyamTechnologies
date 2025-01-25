import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body">
          {/* <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
            {["Home", "Our Courses", "Blog", "Gallery", "About", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
