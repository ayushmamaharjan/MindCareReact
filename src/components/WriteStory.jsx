import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/writestory.css";

function WriteStory() {
  return (
    <div className="container">
      <div className="header">
        <h1>Write Your Story</h1>
      </div>
      <div className="form-box">
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Story" rows="6" required></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default WriteStory;
