import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { useCart } from "../context/CartContext";
import { isLoggedInUser, logout } from "../services/authService";
import { useEffect, useState } from "react";

function Navbar({ isLoggedIn, onLogout }) {
  function getUsername(){
    if (localStorage.getItem("userInfo") != null) {
      return JSON.parse(localStorage.getItem("userInfo")).username;
    }
  };
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, []);

  function handleLogout(){
    localStorage.removeItem("userInfo");
    onLogout();
  } 
  const { openCart, cartQuantity} = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="/">
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
          <div className="navbar-nav ms-auto">
              {!isLoggedIn && (
                <div className="me-3">
                  <NavLink
                    className="nav-link fs-5"
                    activeclassname="active"
                    to="/login"
                  >
                    <i className="bi bi-box-arrow-in-right me-2"></i>Login
                  </NavLink>
                </div>
              )}
              {!isLoggedIn && (
                <div className="me-3">
                  <NavLink
                    className="nav-link fs-5"
                    activeclassname="active"
                    to="/register"
                  >
                    <i className="bi bi-person-plus me-2"></i>Register
                  </NavLink>
                </div>
              )}
              {isLoggedIn && (
                <div className="me-3">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {getUsername() || "Account"}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" onClick={handleLogout}>Log out</a ></li>
                    </ul>
                  </li>
              </div>)}
            
            {isLoggedIn && (<button onClick={openCart}
              className="btn btn-outline-light fs-5 me-2"
              activeclassname="active"
            >
              <i className="bi bi-cart3 me-2"></i> Cart
              {cartQuantity > 0 && (
                <span className="ms-2 badge bg-light text-dark">{cartQuantity}</span>
              )}
            </button>)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
