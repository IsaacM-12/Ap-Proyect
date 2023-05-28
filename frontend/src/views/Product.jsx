import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utilities/formatPrice.js";
import "../App.css";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState(0);

  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${id}`, config)
      .then((res) => res.data)
      .then((product) => setProduct(product));
  }, []);

  const deleteImage = async () => {
    const serviceUrl = `http://localhost:8080/product/` + id;
    axios.delete(serviceUrl).then(() => {
      NotificationManager.success("Success", "Borrado con exito");
      redirectHome();
    });
  };


// Update product name
const updateProductName = async () => {
  const updatedProduct = {
    ...product,
    name: newName,
  };

  axios
    .put(`http://localhost:8080/product/${id}/name`, updatedProduct, config)
    .then(() => {
      NotificationManager.success("Success", "Nombre de producto actualizado");
      setProduct(updatedProduct);
    });
};

// Update product description
const updateProductDescription = async () => {
  const updatedProduct = {
    ...product,
    description: newDescription,
  };

  axios
    .put(`http://localhost:8080/product/${id}/description`, updatedProduct, config)
    .then(() => {
      NotificationManager.success("Success", "Descripción de producto actualizada");
      setProduct(updatedProduct);
    });
};

// Update product price
const updateProductPrice = async () => {
  const updatedProduct = {
    ...product,
    price: newPrice,
  };

  axios
    .put(`http://localhost:8080/product/${id}/price`, updatedProduct, config)
    .then(() => {
      NotificationManager.success("Success", "Precio de producto actualizado");
      setProduct(updatedProduct);
    });
};


  const redirectHome = () => {
    navigate("/");
  };



  return (
    <section className="bg-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6">
            <img alt={product.name} className="imgSingle" src={product.url} />
          </div>
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="h2">{product.name}</h1>
              <p className="lead">{product.description}</p>
              <hr />
              <div className="d-flex">
                <span className="h4">Precio: {formatPrice(product.price)}</span>
              </div>
              <div>
                <button className="buttonDelete" onClick={deleteImage}>
                  Borrar Producto
                </button>
              </div>
              <div>
                <label htmlFor="name">Nuevo Nombre:</label>
                <input
                  type="text"
                  id="name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button onClick={updateProductName}>Actualizar Nombre</button>
              </div>
              <div>
                <label htmlFor="description">Nueva Descripción:</label>
                <input
                  type="text"
                  id="description"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
                <button onClick={updateProductDescription}>Actualizar Descripción</button>
              </div>
              <div>
                <label htmlFor="price">Nuevo Precio:</label>
                <input
                  type="number"
                  id="price"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
                <button onClick={updateProductPrice}>Actualizar Precio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  

}
