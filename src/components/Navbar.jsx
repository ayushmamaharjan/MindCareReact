import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">LOGO</div>
    <ul className="nav-links">
      <li>
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/mentalhealthissues"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Mental Health Issues
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/blogs"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/personalstories"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Personal Stories
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/writestory"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Write a story
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/more"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          More
        </NavLink>
      </li>
    </ul>
    <div className="profile-icon">👤</div>
  </nav>
);

export default Navbar;
