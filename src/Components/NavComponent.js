import React, { useState, useEffect } from "react";
import defaultLogo from "../main.png"; // Replace with your default logo path
import stickyLogo from "../White Logo.png"; // Replace with your sticky logo path
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {} from "react-icons/fa6";

const Navbar = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const pageStyles = {
    "/": {
      backgroundColor: isSticky ? "#fff" : "transparent",
      textColor: isSticky ? "#001a33" : "white",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      // bgColor: "blue",
    },
    "/our-courses": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/Sql": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/about": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/python-course": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/DataScience": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/Azure": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/Aws": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/Informatica": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/Pega": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/MicroSoft": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/Java": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/Testing": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/PowerBi": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/Sap": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/DataAnalytics": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/Tableau": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/blog": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    "/gallery": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
    // "/about": { backgroundColor: isSticky ? "lightgreen" : "transparent", textColor: isSticky ? "green" : "darkgreen" },
    "/contact": {
      backgroundColor: isSticky ? "#fff" : "#fff",
      textColorTopNav: isSticky ? "#001a33" : "#fff",
      textColor: isSticky ? "#001a33" : "#001a33",
      bgColor: "#136ad5",
    },
  };
  const { backgroundColor, textColor, bgColor, textColorTopNav } = pageStyles[
    location.pathname
  ] || {
    backgroundColor: isSticky ? "#fff" : "transparent",
    textColor: isSticky ? "#001a33" : "white",
    bgColor: "#fff",
    textColorTopNav: "#001a33",
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const getLogo = () => {
    if (location.pathname === "/" || location.pathname === "/home") {
      return isSticky ? stickyLogo : defaultLogo;
    }
    return stickyLogo;
  };

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true);
    setSubmissionStatus("");

    try {
      // Send the form data as a form-encoded POST request
      const response = await axios.post(
        "https://shyamtechnologies.in/sendEmail.php", // Replace with the actual path to your PHP file
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Use JSON format for the PHP backend
          },
        }
      );

      // Check the PHP script's response
      if (response.data.status === "success") {
        setSubmissionStatus("Form submitted successfully!");
        setShowModal(false); // Close modal on success
      } else {
        setSubmissionStatus(response.data.message || "Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <nav
      className={`site-nav mb-5`}
      style={{
        height: "80px",
        backgroundColor,
        marginTop: isSticky ? "0px" : "",
        position: "fixed",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      {!isSticky && (
        <div className="pb-2 top-bar mb-3" style={{ backgroundColor: bgColor }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-lg-9">
                <Link
                  href="#"
                  className="small mr-3"
                  style={{
                    color: textColorTopNav,
                    backgroundColor: bgColor,
                  }}
                >
                  <span className="icon-question-circle-o mr-2"></span>
                  <span className="d-none d-lg-inline-block text-none">
                    Have a questions?
                  </span>
                </Link>
                <Link
                  href="#"
                  className="small mr-3"
                  style={{ color: textColorTopNav }}
                >
                  {/* <span> </span> */}
                  {/* <FaHouse></FaHouse> */}
                  <span className="icon-phone mr-2"></span>
                  <span className="d-none d-lg-inline-block">
                    +91 9346593339 / +91 8142652799
                  </span>
                </Link>
                <Link
                  href="#"
                  className="small mr-3"
                  style={{ color: textColorTopNav }}
                >
                  <span className="icon-envelope mr-2"></span>
                  <span className="d-none d-lg-inline-block">
                    shyamtechnologieshyd@gmail.com
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container position-relative">
        <div className="site-navigation text-center">
          {/* Logo Section */}
          <Link className="logo menu-absolute m-0">
            <img
              to="/"
              alt="Logo"
              id="logo"
              // src={isSticky ? stickyLogo : defaultLogo}
              src={getLogo()}
              style={{ width: `70px`, height: `48px` }}
            />
          </Link>

          {/* Navigation Links */}
          <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
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
                    style={{
                      color: textColor,
                      // transition: "color 0.3s ease-in-out",
                    }}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Enroll Button */}
          <Link
            to="/"
            className="btn-book btn btn-secondary btn-sm menu-absolute"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true); // Open the modal when link is clicked
            }}
          >
            Enroll Now
          </Link>

          {/* Burger Menu for Mobile */}
          <Link
            href="#"
            className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </Link>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h2>Enroll in a Course</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="course">Course Name:</label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                style={{ marginTop: "10px" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
            {submissionStatus && <p>{submissionStatus}</p>}
          </div>
        </div>
      )}
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
          }
          .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            width: 400px;
            max-width: 90%;
            position: relative;
          }
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            color:black;
            border: none;
            font-size: 24px;
            cursor: pointer;
          }
          // .close-btn:hover {
          //   color: green;
          // }
          form div {
            margin-bottom: 15px;
          }
          input {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          button {
            padding: 10px 15px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
