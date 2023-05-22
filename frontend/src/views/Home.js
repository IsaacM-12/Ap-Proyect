import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/priceFormatting.js";

const Home = () => {
  const [Product, setProduct] = useState([]);
  const [action, setAction] = useState("Add to cart");

  function handleActionClick() {
    console.log(action);
    setAction("Added to cart");
    console.log(action);
  }

  // para cambiar la direccion del browser
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // Trae todas las imagenes cada vez que refresque la pagina
  useEffect(() => {
    selectProductToBD();
  }, []);

  // -------------------------------------------------------------
  // selecciona todos las Product de la base de datos y las pinta en el browser
  // -------------------------------------------------------------
  const selectProductToBD = async () => {
    const serviceUrl = "http://localhost:8080/product";
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await axios.get(serviceUrl, config);

    if (response.data.length > 0) {
      let productlist = response.data.map((item) => {
        return (
          <div key={item.id} className="singleImage">
            <img
              src={item.url}
              id={item.id}
              onClick={() => navigate("/product" + "/" + item.id)}
            />

            <h5 className="price mb-0">{formatPrice(item.price)}</h5>
            <h5 className="name mb-0">{item.name}</h5>
            <button className="" onClick={handleActionClick}>{action}</button>
          </div>
        );
      });
      setProduct(productlist);
    } else {
      setProduct(<h2>No hay ningun Producto</h2>);
    }
  };

  // -------------------------------------------------------------
  // selecciona todos los Product de la base de datos con un filtro
  // -------------------------------------------------------------
  const selectProductToBDFilter = async () => {
    const serviceUrl = "http://localhost:8080/product/find/" + search;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await axios.get(serviceUrl, config);

    if (response.data.length > 0) {
      let imagelist = response.data.map((item) => {
        return (
          <div className="singleImage">
            <img
              src={item.url}
              id={item.id}
              onClick={() => navigate("/product" + "/" + item.id)}
            />
            <h3>{formatPrice(item.price)}</h3>
            <h3>{item.name}</h3>
          </div>
        );
      });
      setProduct(imagelist);
    } else {
      setProduct(<h2>No hay ningun Producto</h2>);
    }
  };

  return (
    <div>
      <div className="mt-5">
        <h2 className="mb-3">Productos</h2>

        <input className="input-search" type="text" onChange={(e) => setSearch(e.target.value)} />
        <button className="ms-3 button-search" onClick={selectProductToBDFilter}>Buscar</button>

        <div className="img-gallery">{Product}</div>

        <NotificationContainer />
      </div>
    </div>
  );
};

export default Home;
