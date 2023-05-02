import { Link } from "react-router-dom";
import "../App.css";

const PiePagina = () => {
    return (
        <div className="piePagina">
          <Link to="/">Inicio</Link>
          <a href="tel:+50621014544">Telefono: +506 2101-4544</a>
          <a href="mailto:ventas@bluehill-solutions.com">Correo: ventas@bluehill-solutions.com</a>
        </div>
    );
  };
  
  export default PiePagina;