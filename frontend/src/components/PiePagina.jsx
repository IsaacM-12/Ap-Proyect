import { Link } from "react-router-dom";
import "../App.css";

const PiePagina = () => {
    return (
      <div className="piePagina">
        <Link to="/">
          <a>Inicio</a>
        </Link>
        <a>Telefono: +506 2101-4544</a>
        <a>Correo: ventas@bluehill-solutions.com</a>
  
      </div>
    );
  };
  
  export default PiePagina;