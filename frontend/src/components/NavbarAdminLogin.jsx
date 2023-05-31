import { Link, NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import { useCart } from "../context/CartContext";
import { isLoggedInUser, logout } from "../services/authService";
import { useEffect, useState } from "react";

function NavbarAdminLogin({ isLoggedIn, onLogout }) {
  function getUsername(){
    if (localStorage.getItem("userInfo") != null) {
      return JSON.parse(localStorage.getItem("userInfo")).username;
    }
  };
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const navigate = useNavigate;
  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, []);

  function handleLogout(){
    window.location.href = "/admin";
  } 
  const { openCart, cartQuantity} = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="/admin">
            <img src="/Images/logo.png" alt="logo" className="logo-icon" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav nav-fill">
            <NavLink
              className="nav-link ms-5 me-5 fs-5"
              activeclassname="active"
              to="/"
            >
              <i className="bi bi-house me-2"></i>Home
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdminLogin;
