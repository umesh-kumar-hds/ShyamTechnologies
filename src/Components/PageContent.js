import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PageContent = ({ prop }) => {
  const [showPart1Topics, setShowPart1Topics] = useState(false);
  const [showPart2Topics, setShowPart2Topics] = useState(false);
  const [showPart3Topics, setShowPart3Topics] = useState(false);
  const [showPart4Topics, setShowPart4Topics] = useState(false);
  const [showPart5Topics, setShowPart5Topics] = useState(false);
  const [showPart6Topics, setShowPart6Topics] = useState(false);
  const [showPart7Topics, setShowPart7Topics] = useState(false);
  const [showPart8Topics, setShowPart8Topics] = useState(false);
  const [showPart9Topics, setShowPart9Topics] = useState(false);
  const [showPart10Topics, setShowPart10Topics] = useState(false);
  const [showPart11Topics, setShowPart11Topics] = useState(false);
  const [showPart12Topics, setShowPart12Topics] = useState(false);
  const [showPart13Topics, setShowPart13Topics] = useState(false);
  const [showPart14Topics, setShowPart14Topics] = useState(false);
  const [showPart15Topics, setShowPart15Topics] = useState(false);
  const [showPart16Topics, setShowPart16Topics] = useState(false);
  const [showPart17Topics, setShowPart17Topics] = useState(false);
  const [showPart18Topics, setShowPart18Topics] = useState(false);
  const [showPart19Topics, setShowPart19Topics] = useState(false);
  const [showPart20Topics, setShowPart20Topics] = useState(false);
  const [showPart21Topics, setShowPart21Topics] = useState(false);
  const {
    title,
    part1,
    topic1,
    part2,
    topic2,
    part3,
    topic3,
    part4,
    topic4,
    part5,
    topic5,
    part6,
    topic6,
    part7,
    topic7,
    part8,
    topic8,
    part9,
    topic9,
    part10,
    topic10,
    part11,
    topic11,
    part12,
    topic12,
    part13,
    topic13,
    part14,
    topic14,
    part15,
    topic15,
    part16,
    topic16,
    part17,
    topic17,
    part18,
    topic18,
    part19,
    topic19,
    part20,
    topic20,
    part21,
    topic21,
  } = prop;

  const dropdownStyles = {
    container: {
      overflow: "hidden",
      transition: "max-height 0.8s ease-in-out",
    },
    hidden: {
      maxHeight: "0",
    },
    visible: {
      maxHeight: "500px", // Adjust as needed
    },
    list: {
      margin: "0",
      padding: "0",
      listStyleType: "none",
    },
    listItem: {
      padding: "5px 0",
      borderBottom: "1px solid #ddd",
      listStyleType: "none",
    },
    header: {
      cursor: "pointer",
      color: "blue",
      margin: "10px 0",
    },
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
    <div>
      <hr></hr>
      <div style={{ marginTop: "105px" }}>
        <div className="services-section" style={{ padding: "40px 0" }}>
          <div className="twoButtons">
            <h2 className="responsive-margin line-bottom ">
              {/* {`Data Science With AI & ML Course`} */}
              {title}
            </h2>
            <Link to="/" className=" btn btn-secondary ml-5 mr-1">
              All Courses
            </Link>
          </div>
          <div className="container">
            <div className="row ">
              <p data-aos="fade-up" data-aos-delay="100">
                Unlock the power of {title} with this comprehensive course
                designed for beginners and advanced learners alike.
              </p>
              <div className="col-lg-3 mb-5 mb-lg-0">
                <div
                  className="section-title mb-3"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  {/* <!-- <h2 class="line-bottom mb-4">Become an Instructor</h2> --> */}
                </div>

                <ul
                  className=" list-unstyled  primary"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <b className="mb-4">Course Outline: {title}</b>
                  <br />

                  <div className="mt-4">
                    <li
                      className="ul-check list-unstyled"
                      onClick={() => setShowPart1Topics(!showPart1Topics)}
                      style={dropdownStyles.header}
                    >
                      {part1} {showPart1Topics ? "" : ""}
                    </li>
                    <div
                      style={{
                        ...dropdownStyles.container,
                        ...(showPart1Topics
                          ? dropdownStyles.visible
                          : dropdownStyles.hidden),
                      }}
                    >
                      <ul style={dropdownStyles.list}>
                        {topic1.map((topic, index) => (
                          <li key={index} style={dropdownStyles.listItem}>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <li
                      onClick={() => setShowPart2Topics(!showPart2Topics)}
                      style={dropdownStyles.header}
                    >
                      {part2} {showPart2Topics ? "" : ""}
                    </li>
                    <div
                      style={{
                        ...dropdownStyles.container,
                        ...(showPart2Topics
                          ? dropdownStyles.visible
                          : dropdownStyles.hidden),
                      }}
                    >
                      <ul style={dropdownStyles.list}>
                        {topic2.map((topic, index) => (
                          <li key={index} style={dropdownStyles.listItem}>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <li
                      onClick={() => setShowPart3Topics(!showPart3Topics)}
                      style={dropdownStyles.header}
                    >
                      {part3} {showPart3Topics ? "" : ""}
                    </li>
                    <div
                      style={{
                        ...dropdownStyles.container,
                        ...(showPart3Topics
                          ? dropdownStyles.visible
                          : dropdownStyles.hidden),
                      }}
                    >
                      <ul style={dropdownStyles.list}>
                        {topic3.map((topic, index) => (
                          <li key={index} style={dropdownStyles.listItem}>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <li
                      onClick={() => setShowPart4Topics(!showPart4Topics)}
                      style={dropdownStyles.header}
                    >
                      {part4} {showPart4Topics ? "" : ""}
                    </li>
                    <div
                      style={{
                        ...dropdownStyles.container,
                        ...(showPart4Topics
                          ? dropdownStyles.visible
                          : dropdownStyles.hidden),
                      }}
                    >
                      <ul style={dropdownStyles.list}>
                        {topic4.map((topic, index) => (
                          <li key={index} style={dropdownStyles.listItem}>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <li
                      onClick={() => setShowPart5Topics(!showPart5Topics)}
                      style={dropdownStyles.header}
                    >
                      {part5} {showPart5Topics ? "" : ""}
                    </li>
                    <div
                      style={{
                        ...dropdownStyles.container,
                        ...(showPart5Topics
                          ? dropdownStyles.visible
                          : dropdownStyles.hidden),
                      }}
                    >
                      <ul style={dropdownStyles.list}>
                        {topic5.map((topic, index) => (
                          <li key={index} style={dropdownStyles.listItem}>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* <li>
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
                    classification Algorithms: Decision trees, random forests,
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
                  </li> */}
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
              <div className="col-lg-3 mb-2 mb-lg-0 ">
                <div
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  {/* <!-- <h2 class="line-bottom mb-4">Become an Instructor</h2> --> */}
                </div>{" "}
                <p data-aos="fade-up" data-aos-delay="100"></p>
                <ul
                  className=" list-unstyled  primary"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <br />

                  {part6 && (
                    <div>
                      <li
                        onClick={() => setShowPart6Topics(!showPart6Topics)}
                        style={dropdownStyles.header}
                      >
                        {part6} {showPart6Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart6Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic6.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {part7 && (
                    <div>
                      <li
                        onClick={() => setShowPart7Topics(!showPart7Topics)}
                        style={dropdownStyles.header}
                      >
                        {part7} {showPart7Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart7Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic7.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {part8 && (
                    <div>
                      <li
                        onClick={() => setShowPart8Topics(!showPart8Topics)}
                        style={dropdownStyles.header}
                      >
                        {part8} {showPart8Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart8Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic8.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {part9 && (
                    <div>
                      <li
                        onClick={() => setShowPart9Topics(!showPart9Topics)}
                        style={dropdownStyles.header}
                      >
                        {part9} {showPart9Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart9Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic9.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {part10 && (
                    <div>
                      <li
                        onClick={() => setShowPart10Topics(!showPart10Topics)}
                        style={dropdownStyles.header}
                      >
                        {part10} {showPart10Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart10Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic10.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {part11 && (
                    <div>
                      <li
                        onClick={() => setShowPart11Topics(!showPart11Topics)}
                        style={dropdownStyles.header}
                      >
                        {part11} {showPart11Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart11Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic11.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* <li>
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
                    classification Algorithms: Decision trees, random forests,
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
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-3 mb-2 mb-lg-0 ">
                <div
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  {/* <!-- <h2 class="line-bottom mb-4">Become an Instructor</h2> --> */}
                </div>{" "}
                <p data-aos="fade-up" data-aos-delay="100"></p>
                <ul
                  className=" list-unstyled  primary"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <br />

                  {part12 && (
                    <div>
                      <li
                        onClick={() => setShowPart12Topics(!showPart12Topics)}
                        style={dropdownStyles.header}
                      >
                        {part12} {showPart12Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart12Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic12.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {part13 && (
                    <div>
                      <li
                        onClick={() => setShowPart13Topics(!showPart13Topics)}
                        style={dropdownStyles.header}
                      >
                        {part13} {showPart13Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart13Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic13.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {part14 && (
                    <div>
                      <li
                        onClick={() => setShowPart14Topics(!showPart14Topics)}
                        style={dropdownStyles.header}
                      >
                        {part14} {showPart14Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart14Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic14.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {part15 && (
                    <div>
                      <li
                        onClick={() => setShowPart15Topics(!showPart15Topics)}
                        style={dropdownStyles.header}
                      >
                        {part15} {showPart15Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart15Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic15.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {part16 && (
                    <div>
                      <li
                        onClick={() => setShowPart16Topics(!showPart16Topics)}
                        style={dropdownStyles.header}
                      >
                        {part16} {showPart16Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart16Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic16.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* <li>
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
                    classification Algorithms: Decision trees, random forests,
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
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-3 mb-2 mb-lg-0 ">
                <div
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  {/* <!-- <h2 class="line-bottom mb-4">Become an Instructor</h2> --> */}
                </div>{" "}
                <p data-aos="fade-up" data-aos-delay="100"></p>
                <ul
                  className=" list-unstyled  primary"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <br />

                  {part17 && (
                    <div>
                      <li
                        onClick={() => setShowPart17Topics(!showPart17Topics)}
                        style={dropdownStyles.header}
                      >
                        {part17} {showPart17Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart17Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic17.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {part18 && (
                    <div>
                      <li
                        onClick={() => setShowPart18Topics(!showPart18Topics)}
                        style={dropdownStyles.header}
                      >
                        {part18} {showPart18Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart18Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic18.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {part19 && (
                    <div>
                      <li
                        onClick={() => setShowPart19Topics(!showPart19Topics)}
                        style={dropdownStyles.header}
                      >
                        {part19} {showPart19Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart19Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic19.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {part20 && (
                    <div>
                      <li
                        onClick={() => setShowPart20Topics(!showPart20Topics)}
                        style={dropdownStyles.header}
                      >
                        {part20} {showPart20Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart20Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic20.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {part21 && (
                    <div>
                      <li
                        onClick={() => setShowPart21Topics(!showPart21Topics)}
                        style={dropdownStyles.header}
                      >
                        {part21} {showPart21Topics ? "" : ""}
                      </li>
                      <div
                        style={{
                          ...dropdownStyles.container,
                          ...(showPart21Topics
                            ? dropdownStyles.visible
                            : dropdownStyles.hidden),
                        }}
                      >
                        <ul style={dropdownStyles.list}>
                          {topic21.map((topic, index) => (
                            <li key={index} style={dropdownStyles.listItem}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* <li>
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
                    classification Algorithms: Decision trees, random forests,
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
                  </li> */}
                </ul>
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
