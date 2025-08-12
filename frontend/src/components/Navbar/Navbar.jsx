import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
        <h2>Logo</h2>
      <nav>
        <ul>
          <li><Link className="links" to="/">Home</Link></li>
          <li><Link className="links" to="/about">About</Link></li>
          <li><Link className="links" to="/create-post">Post</Link></li>
          <li><Link className="links" to="/register">Sign in</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
