import React, { useState } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import { useNavigate } from "react-router-dom";

function Register() {
  // para cambiar la direccion del browser a la inicial
  const navigate = useNavigate();

  function redirectLogin() {
    navigate("/login");
  }

  const [name, setName] = useState("");
  const [id, setid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // -------------------------------------------------------------
  // Guarda la persona en la base de datos
  // -------------------------------------------------------------
  function createUserBD() {
    var newPerson = {
      id: id,
      name: name,
      password: password,
      email: email,
    };

    if (
      newPerson.id === "" ||
      newPerson.name === "" ||
      newPerson.email === "" ||
      newPerson.password === ""
    ) {
      NotificationManager.warning(
        "Warning message",
        "Debe digitar todos los datos.",
        5000
      );
    } else {
      const serviceUrl = `http://localhost:8080/user`;
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .post(serviceUrl, newPerson, config)
        .then(() => {
          NotificationManager.success("Success", "Creado con exito");
          redirectLogin();
        })

        .catch((error) => {
          NotificationManager.error("Error", "Error", 5000, () => {
            alert("callback");
          });
        });
    }
  }

  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
        crossorigin="anonymous"
      />

      <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active" />
              <a class="nav-link" href="/">
                Home
              </a>
            </ul>
          </div>
        </nav>
        <main>
          <h1 class="d-flex justify-content-center mt-5">Please Sign up</h1>
          <div class="d-flex justify-content-center align-items-center">
            <form id="formLogin" class="text-center mt-0">
              <div class="form-group">
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group mb-4">
                <input
                  type="username"
                  id="inputUsername"
                  class="form-control"
                  placeholder="Username"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="form-group mb-4">
                <input
                  type="id"
                  id="iduser"
                  class="form-control"
                  placeholder="id"
                  required
                  onChange={(e) => setid(e.target.value)}
                />
              </div>
              <div class="form-group mb-4">
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                onClick={createUserBD}
                class="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Sign up
              </button>
              <div class="mt-3">
                <p>
                  You have an account? <a href="/login">Login</a>
                </p>
              </div>
              <p class="mt-5 mb-1 text-muted">&copy; BlueHill</p>
            </form>
          </div>
          <NotificationContainer />
        </main>
      </body>
    </html>
  );
}

export default Register;
