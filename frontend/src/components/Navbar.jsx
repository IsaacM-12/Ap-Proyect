import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="menu">
      <img src="/Images/logo.png" alt="logo" className="logo" />
      <Link to="/">
        <div className="home-container">
          <img src="/Images/home.png" alt="Inicio" className="home-icon" />
          <h3 className="home-text">Inicio</h3>
        </div>
      </Link>
      <Link to="/product/upload">
        <h3>Subir Producto</h3>
      </Link>
      <Link to="/cart" >
      <img src="/Images/cart.png" alt="cart-icon" className="cart-icon" />
      </Link>
    </div>
  );
};

export default Navbar;
