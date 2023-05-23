import React, { useState } from "react";
import { Link } from "react-router-dom";

function login() {
  return (
    <div>
      <h1 class="d-flex justify-content-center mt-5">Please sign in Admin</h1>
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
          <Link to="/admin/home">
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
    </div>
  );
}

export default login;
