import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
import "react-notifications/lib/notifications.css";

const Product = () => {
  const { id } = useParams();
  const [Information, setInformation] = useState([]);
  const [Image, setImage] = useState([]);

  // para cambiar la direccion del browser a la inicial
  const navigate = useNavigate();
  function redirectHome() {
    navigate("/");
  }

  // Trae todos las Productos cada vez que refresque la pagina
  useEffect(() => {
    selectProductByID();
  }, []);

  // -------------------------------------------------------------
  // Carga los datos de un Producto en especifico
  // -------------------------------------------------------------
  const selectProductByID = async () => {
    const serviceUrl = `http://localhost:8080/product/` + id;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await axios.get(serviceUrl, config);

    let product = (
      <div className="ful-img">
        <img src={response.data.url} />
      </div>
    );
    setImage(product);
    setInformation(
      <div>
        <a>Nombre: {response.data.name}</a>
        <br></br>
        <br></br>
        <a>Descripción: {response.data.description}</a>
        <br></br>
        <br></br>
        <a>Precio: {response.data.price}</a>
      </div>
    );
  };

  return (
    <div>
        <div className="menu">
      <img src="/Images/logo.png" alt="logo" className="logo" />
      <Link to="/">
        <div className="home-container">
          <img src="/Images/home.png" alt="Inicio" className="home-icon" />
          <h3 className="home-text">Inicio</h3>
        </div>
      </Link>
      <Link to="/register">
        <h3>Registrarme</h3>
      </Link>
      <Link to="/login">
        <h3>Iniciar Sesión</h3>
      </Link>
    </div>
    <div className="space">
      <div className="ful-img">{Image}</div>

      <div className="information">{Information}</div>
    </div>
    </div>
  );
};

export default Product;
