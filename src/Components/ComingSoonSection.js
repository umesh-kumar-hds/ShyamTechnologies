import React from "react";
import { Link } from "react-router-dom";

const ComingSoonSection = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <hr></hr>
      <h1>Blog Page Coming Soon</h1>
      <p>Oops! The Content you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default ComingSoonSection;
