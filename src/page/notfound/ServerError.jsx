import React from "react";
import { Link } from "react-router-dom";

function ServerError() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", height: "100vh" }}>
      <h1>500 - Server Error</h1>
      <p>Oops! Something went wrong on our end.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default ServerError;
