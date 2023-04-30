import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

const Home = () => {
  const [Product, setProduct] = useState([]);

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
          <div className="singleImage">
            <img
              key={item.id}
              src={item.url}
              id={item.id}
              onClick={() => navigate("/product" + "/" + item.id)}
            />
            <h3>₡ {item.price}</h3>
            <h3>{item.name}</h3>
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
              key={item.id}
              src={item.url}
              id={item.id}
              onClick={() => navigate("/product" + "/" + item.id)}
            />
            <h3>₡ {item.price}</h3>
            <h3>{item.name}</h3>
          </div>
        );
      });
      setProduct(imagelist);
    } else {
      setProduct(<h2>No hay ninguna Producto</h2>);
    }
  };

  return (
    <div className="galery">
      <h1> Productos </h1>

      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={selectProductToBDFilter}>Buscar</button>

      <div className="img-gallery">{Product}</div>

      <NotificationContainer />
    </div>
  );
};

export default Home;
