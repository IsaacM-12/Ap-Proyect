import { Link } from "react-router-dom";
import "../App.css";

const PiePagina = () => {
    return (
      <div className="piePagina">
        <Link to="/">
          <a>Inicio</a>
        </Link>
        <a>Telefono: </a>
        <a>Correo: </a>
  
      </div>
    );
  };
  
  export default PiePagina;