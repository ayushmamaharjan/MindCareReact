import React from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/firstscroll.css'


const FirstScroll = () => {
  return (
    <div>
      {/* <nav className="navbar">
        <div className="logo">LOGO</div>
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Mental Health Issues</li>
          <li>Write a story</li>
          <li>Personal Stories</li>
          <li>Blogs</li>
          <li>More</li>
        </ul>
        <input type="text" className="search-box" placeholder="Search..." />
      </nav> */}

      <section className="mission-section">
        {/* <div className="mission-overlay"> */}
          <div className="mission-content">
            <h1>OUR MISSION</h1>
            <p>
              "To create a safe space where people can find the guidance and support for their mental health."
            </p>
        </div>
      </section>
    </div>
  );
};

export default FirstScroll;

