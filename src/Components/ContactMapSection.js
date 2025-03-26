import axios from "axios";
import React, { useEffect, useState } from "react";

const ContactMapSection = () => {
  // const [showModal, setShowModal] = useState(false);

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
        // setShowModal(false); // Close modal on success
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
  useEffect(() => {}, []);
  return (
    <div>
      <div style={{ marginTop: "150px" }}>
        <hr></hr>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-12  order-2 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="text-primary">Reach Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section" style={{ paddingTop: "50px" }}>
        <div className="container">
          <div className="row mb-5">
            <div
              className="col-lg-4 mb-5 order-3 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="contact-info">
                <div className="address mt-4">
                  <i class="bi bi-geo-alt"></i>

                  <h4 className="mb-2">Location:</h4>
                  <p>
                    Flat no 214, 2nd Floor, Annapurna Block, Aditya Enclave,
                    Telangana-500038.
                  </p>
                </div>

                <div className="open-hours mt-4">
                  <i class="bi bi-clock"></i>
                  <h4 className="mb-2">Open Hours:</h4>
                  <p>
                    Sunday-Friday:
                    <br />
                    07:00 AM - 08:00 PM
                  </p>
                </div>

                <div className="email mt-4">
                  <i class="bi bi-envelope"></i>
                  <h4 className="mb-2">Email:</h4>
                  <p>shyamtechnologieshyd@gmail.com</p>
                </div>

                <div className="phone mt-4">
                  <i class="bi bi-telephone"></i>
                  <h4 className="mb-2">Call:</h4>
                  <p>9346593339</p>
                  <p>8978493733</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 mb-5 order-1 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "4px",
                  }}
                >
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Email"}
                </button>

                {submissionStatus && <p>{submissionStatus}</p>}
              </form>
            </div>
            <div
              className="col-lg-4 mb-5 order-1 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <iframe
                title="shyamMap"
                className="mapStyles"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.482498418729!2d78.44490909999999!3d17.436605599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91649637696b%3A0xd39ef5ef9a40fa80!2sShyam%20Technologies!5e0!3m2!1sen!2sin!4v1736447469454!5m2!1sen!2sin"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMapSection;
