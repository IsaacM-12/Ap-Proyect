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
  function redirectGalery() {
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
      description: description,
      url: url,
      name: nameimage,
      price: price,
      quantity: quantity,
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
        .then(redirectGalery())

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
    <div className="uploadCSS">
      <h1> Subir Producto </h1>

      <div>
        <form onSubmit={CreateImage}>
          <label>
            Imagen:
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Descripción:
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Nombre:
            <input type="text" onChange={(e) => setNameImage(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <label>
            Precio:
            <input type="text" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <label>
            Cantidad:
            <input type="text" onChange={(e) => setQuantity(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <button>Subir Producto</button>
        </form>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default UploadProduct;
