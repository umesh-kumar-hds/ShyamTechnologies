import React, { useEffect } from "react";

const ContactMapSection = () => {
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
                  <i className="icon-room"></i>
                  <h4 className="mb-2">Location:</h4>
                  <p>
                    Flat no 214, 2nd Floor, Annapurna Block, Aditya Enclave,
                    Telangana-500038.
                  </p>
                </div>

                <div className="open-hours mt-4">
                  <i className="icon-clock-o"></i>
                  <h4 className="mb-2">Open Hours:</h4>
                  <p>
                    Sunday-Friday:
                    <br />
                    07:00 AM - 08:00 PM
                  </p>
                </div>

                <div className="email mt-4">
                  <i className="icon-envelope"></i>
                  <h4 className="mb-2">Email:</h4>
                  <p>shyamtechnologieshyd@gmail.com</p>
                </div>

                <div className="phone mt-4">
                  <i className="icon-phone"></i>
                  <h4 className="mb-2">Call:</h4>
                  <p>9346593339</p>
                  <p>8142652799</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 mr-auto order-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form action="send_email.php" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Email</button>
              </form>
            </div>
            <div
              className="col-lg-5 mr-auto order-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <iframe
                title="shyamMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.482498418729!2d78.44490909999999!3d17.436605599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91649637696b%3A0xd39ef5ef9a40fa80!2sShyam%20Technologies!5e0!3m2!1sen!2sin!4v1736447469454!5m2!1sen!2sin"
                width="450"
                height="350"
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
