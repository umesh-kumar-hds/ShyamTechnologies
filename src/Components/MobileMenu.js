import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`site-mobile-menu ${isOpen ? "offcanvas-menu" : ""}`}>
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close" onClick={toggleMenu}>
          <span></span>
        </div>
      </div>
      <div className="site-mobile-menu-body">
        <ul className="site-nav-wrap">
          {["Home", "Our Courses", "Blog", "Gallery", "About", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
