import { useState } from "react";
import { uploadFile } from "../firebase/config";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";


const UploadProduct = () => {
  const [file, setFile] = useState(null);

  const [description, setDescription] = useState("");
  const [nameimage, setNameImage] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  // para cambiar la direccion del browser a la inicial
  const navigate = useNavigate();

  function redirectHome() {
    navigate("/");
  }

  function refresque() {
    navigate("/product/upload");
  }

  // -------------------------------------------------------------
  // Guarda el Producto en la base de datos
  // -------------------------------------------------------------
  function createProductBD(id, url) {
    var newProduct = {
      id: id,
      description: description,
      url: url,
      name: nameimage,
      price: price,
      //quantity: quantity,
    };

    if (
      newProduct.description === "" ||
      newProduct.url === "" ||
      newProduct.name === "" ||
      newProduct.price === 0
    ) {
      NotificationManager.warning(
        "Warning message",
        "Debe digitar todos los datos.",
        5000
      );
    } else {
      const serviceUrl = `http://localhost:8080/product`;
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .post(serviceUrl, newProduct, config)
        .then(() => {
          NotificationManager.success("Success", "Creado con exito");
        })
        .then(redirectHome())

        .catch((error) => {
          NotificationManager.error("Error", "Error");
        });
    }
  }

  // -------------------------------------------------------------
  // Publica La imagen en firebase y le crea un URL
  // ademas llama la funcion createProduct que la guarda en la base de datos
  // -------------------------------------------------------------

  const CreateImage = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file);
      const uniqueID = uuidv4();
      createProductBD(uniqueID, result);
    } catch (error) {
      NotificationManager.error(
        "Error",
        "Asegúrese que todos los campos sean validos",
        5000
      );
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Subir Producto</h1>

        <form onSubmit={CreateImage}>
          <div className="mb-3">
            <label className="form-label">
              Imagen:
              <input
                className="form-control"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Descripción:
              <input
                className="form-control"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Nombre:
              <input
                className="form-control"
                type="text"
                onChange={(e) => setNameImage(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Precio:
              <input
                className="form-control"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Cantidad:
              <input
                className="form-control"
                type="text"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </label>
          </div>
          <button className="btn btn-primary">Subir Producto</button>
        </form>

        <NotificationContainer />
      </div>
    </div>

  );
};

export default UploadProduct;
