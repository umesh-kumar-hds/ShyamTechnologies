import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PageContent = ({ prop }) => {
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
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("");

    try {
      // Replace with your backend URL
      const response = await axios.post(
        "https://your-backend-url.com/api/submit-form",
        formData
      );

      if (response.status === 200) {
        setSubmissionStatus("Form submitted successfully!");
        setShowModal(false); // Close modal on success
      } else {
        setSubmissionStatus("Error submitting form. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus("Network error. Please try again.");
    }
    setIsSubmitting(false);
  };
  return (
    <div>
      <hr></hr>
      <div style={{ marginTop: "150px" }}>
        <div class="services-section">
          <div class="twoButtons">
            <h2 style={{ marginLeft: "120px" }} class="line-bottom">
              {/* {`Data Science With AI & ML Course`} */}
              {prop}
            </h2>
            <Link to="/" class=" btn btn-secondary ml-5 mr-1">
              All Courses
            </Link>
          </div>
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-12 mb-5 mb-lg-0">
                <div
                  class="section-title mb-3"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  {/* <!-- <h2 class="line-bottom mb-4">Become an Instructor</h2> --> */}
                </div>

                <p data-aos="fade-up" data-aos-delay="100">
                  Unlock the power of {prop} with this comprehensive course
                  designed for beginners and advanced learners alike.
                </p>

                <ul
                  class="ul-check list-unstyled mb-5 primary"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <b>Course Outline: {prop}</b>
                  <br />
                  <li>
                    Module 1: Introduction to Data Science Overview of Data
                    Science: What data science is, its importance, and its
                    applications. Data Science Process: Data collection,
                    cleaning, visualization, analysis, and model-building.
                    Python for Data Science: Basics of Python programming
                    (libraries such as NumPy, Pandas, Matplotlib).
                  </li>
                  <li>
                    Module 2: Data Wrangling and Preprocessing Data Cleaning:
                    Handling missing values, duplicates, outliers, and data
                    imputation. Data Transformation: Scaling, encoding
                    categorical variables, feature engineering, normalization.
                    Exploratory Data Analysis (EDA): Visualizing data using
                    libraries like Seaborn and Matplotlib.
                  </li>
                  <li>
                    Module 3: Introduction to Machine Learning What is Machine
                    Learning?: Overview of ML, types of learning (supervised,
                    unsupervised, reinforcement). Algorithms Overview: Linear
                    regression, decision trees, support vector machines (SVM),
                    k-nearest neighbors (KNN). Model Evaluation: Metrics like
                    accuracy, precision, recall, F1-score, ROC-AUC.
                  </li>
                  <li>
                    Module 4: Supervised Learning Algorithms Regression
                    Algorithms: Linear regression, logistic regression.
                    Classification Algorithms: Decision trees, random forests,
                    SVM, k-NN. Model Tuning: Hyperparameter tuning with Grid
                    Search and Random Search.
                  </li>
                  <li>
                    Module 5: Unsupervised Learning Algorithms Clustering:
                    K-means, hierarchical clustering, DBSCAN. Dimensionality
                    Reduction: PCA (Principal Component Analysis), t-SNE for
                    visualizing high-dimensional data. Association Rule
                    Learning: Apriori, Eclat for market basket analysis.
                  </li>
                  <li>
                    Module 6: Neural Networks & Deep Learning Introduction to
                    Neural Networks: Basic architecture (input layer, hidden
                    layers, output layer). Deep Learning Concepts: Convolutional
                    Neural Networks (CNNs), Recurrent Neural Networks (RNNs),
                    and how they work. Frameworks: Using TensorFlow and Keras
                    for building deep learning models.
                  </li>
                  <li>
                    Module 7: Artificial Intelligence and its Applications AI
                    Fundamentals: Natural Language Processing (NLP), Computer
                    Vision, Reinforcement Learning. AI in Real-World Problems:
                    How AI is used in industries like healthcare, finance,
                    marketing, etc. AI Ethics: Bias in AI models, fairness, and
                    transparency.
                  </li>
                  <li>
                    Module 8: Model Deployment and Production Model Deployment:
                    Deploying machine learning models using Flask/Django,
                    Docker, or cloud services like AWS, GCP, Azure. End-to-End
                    Pipeline: Building a pipeline from data collection to
                    real-time model predictions.
                  </li>
                  <li>
                    Module 9: Capstone Project Practical Application: Apply all
                    the concepts learned in a real-world problem, create a full
                    project from scratch (data collection, cleaning, modeling,
                    and deployment).
                  </li>
                </ul>

                <p data-aos="fade-up" data-aos-delay="300">
                  <Link
                    to="/"
                    className="btn btn-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true); // Open the modal when link is clicked
                    }}
                  >
                    Enroll Now
                  </Link>
                </p>
              </div>
              {/* <!-- <div class="col-lg-6" data-aos="fade-up" data-aos-delay="0">
            <figure class="img-wrap-2">
              <img src="images/ammai.png" alt="Image" class="img-fluid">
              <div class="dotted"></div>
            </figure>

          </div> --> */}
            </div>
          </div>
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
    </div>
  );
};

export default PageContent;
