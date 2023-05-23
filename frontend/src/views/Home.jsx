import { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
// import { formatPrice } from "../utilities/priceFormatting.js";

import { Col, Row } from "react-bootstrap";
import { ProductCard } from "../components/ProductCard.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);
  // const [action, setAction] =  useState("Add to cart");

  // function handleActionClick() {
  //   console.log(action);
  //   setAction("Added to cart");
  //   console.log(action);
  // }

  // para cambiar la direccion del browser
  // const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // Trae todas las imagenes cada vez que refresque la pagina
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const serviceUrl = "http://localhost:8080/product";
    let response = await axios.get(serviceUrl);
    setProducts(response.data);
  };

  const getFilteredProducts = async () => {
    const serviceUrl = `http://localhost:8080/product/find/${search}`;
    try {
    let response = await axios.get(serviceUrl)
    setProducts(response.data)
    }
    catch(error){
      getProducts();
      return;
    };

  };

  // // -------------------------------------------------------------
  // // selecciona todos las Product de la base de datos y las pinta en el browser
  // // -------------------------------------------------------------
  // const selectProductToBD = async () => {
  //   const serviceUrl = "http://localhost:8080/product";
  //   let config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   let response = await axios.get(serviceUrl, config);

  //   if (response.data.length > 0) {
  //     let productlist = response.data.map((item) => {
  //       return (
  //         <div key={item.id} className="singleImage">
  //           <img
  //             src={item.url}
  //             id={item.id}
  //             onClick={() => navigate("/product" + "/" + item.id)}
  //           />

  //           <h5 className="price mb-0">{formatPrice(item.price)}</h5>
  //           <h5 className="name mb-0">{item.name}</h5>
  //           <button className="" onClick={handleActionClick}>{action}</button>
  //         </div>
  //       );
  //     });
  //     setProducts(productlist);
  //   } else {
  //     setProducts(<h2>No hay ningun Producto</h2>);
  //   }
  // };

  // // -------------------------------------------------------------
  // // selecciona todos los Product de la base de datos con un filtro
  // // -------------------------------------------------------------
  // const selectProductToBDFilter = async () => {
  //   const serviceUrl = "http://localhost:8080/product/find/" + search;
  //   let config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   let response = await axios.get(serviceUrl, config);

  //   if (response.data.length > 0) {
  //     let imagelist = response.data.map((item) => {
  //       return (
  //         <div className="singleImage">
  //           <img
  //             src={item.url}
  //             id={item.id}
  //             onClick={() => navigate("/product" + "/" + item.id)}
  //           />
  //           <h3>{formatPrice(item.price)}</h3>
  //           <h3>{item.name}</h3>
  //         </div>
  //       );
  //     });
  //     setProducts(imagelist);
  //   } else {
  //     setProducts(<h2>No hay ningun Producto</h2>);
  //   }
  // };

  return (
    <div>
    <div className="mt-5">
      <h2 className="mb-3">Productos</h2>

      <input className="input-search" type="text" onChange={(e) => setSearch(e.target.value)} />
      <button className="ms-3 button-search" onClick={getFilteredProducts}>Buscar</button>

      {products.length === 0 && <h3 className="mt-5">No hay ningun Producto</h3>}
      <Row className="img-gallery">
        {products.map((item) => (
          <Col key={item.id}>
            <ProductCard {...item}></ProductCard>
          </Col>
        ))}
      </Row>
      <NotificationContainer />
    </div>
    </div>
  );
};

export default Home;
