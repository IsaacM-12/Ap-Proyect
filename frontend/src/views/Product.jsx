import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { formatPrice } from "../utilities/formatPrice.js";
import "../App.css";
import "react-notifications/lib/notifications.css";

export default function Product() {
  const [product, setProduct] = useState([])
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:8080/product/${id}`, config)
      .then(res => { return res.data; })
      .then(product => setProduct(product))
  }, []);

  console.log(product);
  return (
    <section className="bg-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6">
            <img
              alt={product.name}
              className="w-100 rounded"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
