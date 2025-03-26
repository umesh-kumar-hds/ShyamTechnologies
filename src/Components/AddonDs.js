import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const DataScienceAddon = () => {
  const [showModal, setShowModal] = useState(false);

  const styles = {
    color: "#0056b3",
  };
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
    <div className="services-section">
      <div className="container bg-blue">
        <div className="row">
          <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-6">
              <h2
                className="text-3xl font-bold text-center text-blue-600"
                style={{ color: "#0056b3" }}
              >
                Best Data Science Course in Hyderabad & Ameerpet
              </h2>
              <p
                className="mt-4 text-gray-700 text-center"
                style={{ color: "#001a33" }}
              >
                At Shyam Technologies, we offer the best Data Science with
                Python training in Hyderabad and Ameerpet, tailored for both
                beginners and professionals. Our comprehensive curriculum covers
                essential topics such as Python, SQL, AI, NLP, Machine Learning,
                Data Visualization, Tableau, EDA, Data Cleaning, and Deep
                Learning. This course equips you with industry-relevant skills
                and hands-on experience to excel in the field of Data Science.
              </p>

              <div className="mt-6">
                <h3
                  className="text-2xl font-semibold text-gray-800"
                  style={styles}
                >
                  Course Curriculum
                </h3>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>
                    <strong>Introduction to Data Science</strong>
                  </li>
                  <li>
                    <strong>
                      Exploratory Data Analysis (EDA) and Data Visualization
                    </strong>
                  </li>
                  <li>
                    <strong>Python Programming</strong>
                  </li>
                  <li>
                    <strong>Artificial Intelligence (AI)</strong>
                  </li>
                  <li>
                    <strong>Machine Learning (ML)</strong>
                  </li>
                  <li>
                    <strong>Deep Learning (DL)</strong>
                  </li>
                  <li>
                    <strong>Natural Language Processing (NLP)</strong>
                  </li>
                  <li>
                    <strong>10 Real-Time Projects</strong>
                  </li>
                  <li>
                    <strong>Internship Certificate</strong>
                  </li>
                  <li>
                    <strong>Course Completion Certificate</strong>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h3
                  className="text-2xl font-semibold text-gray-800"
                  style={styles}
                >
                  Training Modes
                </h3>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>
                    <strong>Classroom Training</strong> – In-person sessions
                    with expert trainers.
                  </li>
                  <li>
                    <strong>Online Training</strong> – Flexible learning from
                    anywhere.
                  </li>
                  <li>
                    <strong>Corporate Training</strong> – Customized training
                    for businesses.
                  </li>
                  <li>
                    <strong>1:1 Sessions</strong> – Personalized coaching for
                    individuals.
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h3
                  className="text-2xl font-semibold text-gray-800"
                  style={styles}
                >
                  100% Placement Support – Your Career, Our Priority
                </h3>
                <p className="mt-2 text-gray-600">
                  We provide <strong>100% placement assistance</strong>,
                  ensuring our students secure jobs in top companies. Our career
                  support includes:
                </p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>Resume building and interview preparation.</li>
                  <li>Mock interviews with industry experts.</li>
                  <li>Job referrals to leading companies.</li>
                  <li>Hands-on projects to boost practical experience.</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3
                  className="text-2xl font-semibold text-gray-800"
                  style={styles}
                >
                  What is Data Science with Python?
                </h3>
                <p className="mt-2 text-gray-600">
                  Data Science with Python involves analyzing, processing, and
                  visualizing large datasets to extract valuable insights. It
                  integrates Machine Learning, AI, SQL, and Data Analytics to
                  solve real-world problems. Python is a preferred language due
                  to its simplicity, extensive libraries like NumPy, Pandas,
                  Matplotlib, and Scikit-learn, and strong industry demand.
                </p>
              </div>

              <div className="mt-6">
                <h3
                  className="text-2xl font-semibold text-gray-800"
                  style={styles}
                >
                  Beginner-Friendly Explanation
                </h3>
                <p className="mt-2 text-gray-600">
                  Data Science with Python helps businesses make better
                  decisions using data. This course covers data collection,
                  cleaning, and visualization with tools like Pandas, NumPy, and
                  Matplotlib. You will also explore Machine Learning, AI, SQL,
                  and Data Analytics to build predictive models. Whether you are
                  new to coding or looking to switch careers, our training will
                  provide real-world skills with{" "}
                  <strong>100% placement support</strong>.
                </p>
              </div>

              <div className="mt-6">
                <h3
                  className="text-2xl font-semibold text-gray-800"
                  style={styles}
                >
                  What You Can Do with Data Science & Python
                </h3>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>
                    <strong>Collect Data:</strong> Gather information from
                    websites, applications, or databases.
                  </li>
                  <li>
                    <strong>Clean Data:</strong> Remove errors and organize it
                    properly.
                  </li>
                  <li>
                    <strong>Make Predictions:</strong> Use Machine Learning to
                    forecast trends.
                  </li>
                  <li>
                    <strong>Visualize Data:</strong> Create charts and graphs
                    with Power BI, Tableau, and Matplotlib.
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h3
                  className="text-2xl font-semibold text-gray-800"
                  style={styles}
                >
                  Why Learn Python for Data Science?
                </h3>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>
                    <strong>Easy Learning Curve:</strong> Simple syntax makes it
                    accessible for beginners.
                  </li>
                  <li>
                    <strong>Rich Ecosystem:</strong> Libraries like Pandas,
                    NumPy, and Scikit-learn simplify data handling.
                  </li>
                  <li>
                    <strong>Versatility & Scalability:</strong> Applied in
                    various domains such as finance, healthcare, and e-commerce.
                  </li>
                  <li>
                    <strong>Strong Community Support:</strong> Thousands of
                    developers contribute to open-source tools.
                  </li>
                  <li>
                    <strong>High Demand & Career Growth:</strong> Companies seek
                    Python-skilled Data Scientists for AI-driven solutions.
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h3
                  className="text-2xl font-semibold text-gray-800"
                  style={styles}
                >
                  Why Choose Our Data Science with Python Training?
                </h3>
                <p className="mt-2 text-gray-600">
                  At <strong>Shyam Technologies</strong>, we provide top-notch
                  Data Science with Python training in{" "}
                  <strong>Hyderabad and Ameerpet</strong>, ensuring you master:
                </p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>
                    <strong>Data Analysis & Machine Learning</strong>
                  </li>
                  <li>
                    <strong>AI & Big Data Technologies</strong>
                  </li>
                  <li>
                    <strong>SQL, Tableau, NLP, and Data Visualization</strong>
                  </li>
                </ul>
                <p className="mt-2 text-gray-600">
                  Our course includes{" "}
                  <strong>
                    hands-on projects, expert trainers, and 100% placement
                    assistance
                  </strong>
                  , making you job-ready. Enroll today and begin your journey in
                  Data Science, AI, and Machine Learning!
                </p>
              </div>

              <div className="mt-6">
                <h3
                  className="text-2xl font-semibold text-gray-800"
                  style={styles}
                >
                  Tools & Technologies Covered
                </h3>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>
                    <strong>Programming:</strong> Python, SQL
                  </li>
                  <li>
                    <strong>Data Visualization:</strong> Tableau, Power BI,
                    Matplotlib, Seaborn
                  </li>
                  <li>
                    <strong>Machine Learning:</strong> Scikit-learn, TensorFlow,
                    Keras
                  </li>
                  <li>
                    <strong>Big Data & AI:</strong> Hadoop, Spark, NLP
                    frameworks
                  </li>
                </ul>
              </div>

              <div className="mt-10 text-center">
                <p data-aos="fade-up" data-aos-delay="300">
                  <Link
                    to="/"
                    className="btn btn-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true); // Open the modal when link is clicked
                    }}
                    style={{ width: "200px", fontSize: "20px" }}
                  >
                    Enroll Now
                  </Link>
                </p>
              </div>
            </div>
          </section>
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
      </div>
    </div>
  );
};
export default DataScienceAddon;
