import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utilities/formatPrice.js";
import "../App.css";
import "react-notifications/lib/notifications.css";
import { NotificationManager, NotificationContainer } from "react-notifications";

export default function ProductAdmin() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);


  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${id}`)
      .then((res) => res.data)
      .then((product) => {
        setProduct(product);
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
      }
      );
  }, []);

  const deleteImage = async () => {
    const serviceUrl = `http://localhost:8080/product/` + id;
    axios.delete(serviceUrl).then(() => {
      NotificationManager.success("Success", "Borrado con exito");
      navigate("/admin/home");
    });
  };

  const updateProduct = async () => {
    const serviceUrl = `http://localhost:8080/product/`;
    const data = {
      id: id,
      name: name,
      description: description,
      price: price,
      url: product.url
    };
    axios.put(serviceUrl, data).then(() => {
      NotificationManager.success("Success", "Actualizado con exito");

    });
  };




  return (
    <section className="bg-light" style={{minHeight: '90vh'}}>
      <br/>
      <br />
      <br />
      <br />
      <br />
      <div className="container py-4 mt-5">
        <div className="row">
          <div className="col-lg-6">
            <img alt={product.name} className="imgSingle" src={product.url} />
          </div>
          <div className="col-lg-6">
            <div className="py-4 ms-5">
              <div className="d-flex">
                <label className="form-label mt-2 me-3">Name:</label>
                <input className="h2 form-control ms-5" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="d-flex">
                <label className="form-label mt-2 me-3">Description:</label>
                <textarea className="lead form-control ms-2" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <hr />
              <div className="d-flex">
                <label className="form-label mt-2 me-3">Price: ₡</label>
                <input className="h4 form-control" value={price} onChange={(e) => setPrice(e.target.value)}/>
              </div>
              <div className="d-flex justify-content-between mt-5">
                <button className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Borrar Producto
                </button>
                  <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          ¿Estas seguro de que quieres borrar este producto?
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteImage}>Borrar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                <button className="btn btn-success" onClick={updateProduct}>
                  Confirmar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
        <NotificationContainer />
      </div>
    </section>
  );
  

}