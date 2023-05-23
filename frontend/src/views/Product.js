import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { formatPrice } from "../utils/priceFormatting";
import "../App.css";
import "react-notifications/lib/notifications.css";
import { useNavigate } from "react-router-dom";
import {
  NotificationManager,
} from "react-notifications";

export default function Product() {

  // para cambiar la direccion del browser a la inicial
  const navigate = useNavigate();
  function redirectHome() {
    navigate("/");
  }

  const [product, setProduct] = useState([])
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/product/${id}`, config)
      .then(res => { return res.data; })
      .then(product => setProduct(product))
  }, []);

  // -------------------------------------------------------------
  // Borra un producto y lo redirigue a home
  // -------------------------------------------------------------
  const deleteImage = async () => {
    const serviceUrl = `http://localhost:8080/product/` + id;
    axios
      .delete(serviceUrl)
      .then(() => {
        NotificationManager.success("Success", "Borrado con exito");
      })
      .then(redirectHome());
  };

  return (
    <section className="bg-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6">
            <img
              alt={product.name}
              className="imgSingle"
              src={product.url}
            />
          </div>
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="h2">
                {product.name}
              </h1>
              <p className="lead">{product.description}</p>
              <hr />
              <div className="d-flex">
                <span className="h4">
                  Precio: {formatPrice(product.price)}
                </span>
              </div>
              <div>
                <button className="buttonDelete" onClick={deleteImage}>
                  Borrar Producto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
