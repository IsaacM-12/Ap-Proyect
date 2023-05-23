import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { useCart } from "../context/CartContext";

const Navbar = () => {
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
            <NavLink
              className="nav-link fs-5"
              activeclassname="active"
              to="/product/upload"
            >
              <i className="bi bi-upload me-2"></i>Product Upload
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto">
            <button onClick={openCart}
              className="btn btn-outline-light fs-5 me-2"
              activeclassname="active"
            >
              <i className="bi bi-cart3 me-2"></i> Cart
              {cartQuantity > 0 && (
                <span className="ms-2 badge bg-light text-dark">{cartQuantity}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
