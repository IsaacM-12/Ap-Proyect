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
          <h1 class="d-flex justify-content-center mt-5">Please Login</h1>
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
              <Link to="/">
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                  Login
                </button>
              </Link>
              <div class="mt-3">
                <p>
                  Don't have an account? <a href="/register">Sign up</a>
                </p>
              </div>
              <p class="mt-5 mb-1 text-muted">&copy; BlueHill</p>
            </form>
          </div>
        </main>
      </body>
    </html>
  );
}

export default login;
