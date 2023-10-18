import React, { useContext } from "react";
import { Link, Navigate, Route } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem('auth')
    setIsAuth(false)
  }
  return (
    <div className="navbar">
      {isAuth
      ? <MyButton onClick={logout}>Log Out</MyButton> 
      : <MyButton><a href="login" className="login_btn">Log In</a></MyButton>
      }
      <div className="navbar__links">
        <Link to="/about" className="navbar__links__option">
          About
        </Link>
        <Link to="/posts" className="navbar__links__option">
          Posts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
