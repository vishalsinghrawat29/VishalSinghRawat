import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo" onClick={() => navigate("/")}>
        <p>👨‍💻 VSR</p>
      </div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <p>Projects</p>
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <p>Blogs</p>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <p>About</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
