import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h2>Inicio</h2>
      </Link>
      <Link to="/product/upload">
        <h2>Subir Producto</h2>
      </Link>

    </div>
  );
};

export default Navbar;
