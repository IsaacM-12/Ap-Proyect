import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="menu">
      <img src="/Images/logo.png"/>
      <Link to="/">
        <h3>Inicio</h3>
      </Link>
      <Link to="/product/upload">
        <h3>Subir Producto</h3>
      </Link>

    </div>
  );
};

export default Navbar;
