import React, { useState } from "react";
import { Link } from "react-router-dom";

function login() {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
        crossorigin="anonymous"
      />

      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="d-flex align-items-center">
            <a class="navbar-brand" href="#">
              <img src="/Images/logo.png" alt="logo" className="logo" />
            </a>
            <a class="nav-link mr-auto" href="/home">
              Inicio
            </a>
          </div>
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
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <h1 class="d-flex justify-content-center mt-5">
            Create a new account
          </h1>
          <div class="d-flex justify-content-center align-items-center">
            <form id="formRegister" class="text-center mt-0">
              <div class="form-group">
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                />
              </div>
              <div class="form-group mb-4">
                <input
                  type="username"
                  id="inputUsername"
                  class="form-control"
                  placeholder="Username"
                  required
                />
              </div>
              <div class="form-group mb-4">
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <Link to="/home">
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                  Create
                </button>
              </Link>
              <div class="mt-3">
                <p>
                  Already have an account? <a href="/login">Log In</a>
                </p>
              </div>
              <p class="mt-5 mb-1 text-muted">&copy; Rust-eze</p>
            </form>
          </div>
        </main>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </body>
    </html>
  );
}

export default login;
