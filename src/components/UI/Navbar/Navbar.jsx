import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about" className="navbar__links__option">About</Link>
        <Link to="/posts" className="navbar__links__option">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
