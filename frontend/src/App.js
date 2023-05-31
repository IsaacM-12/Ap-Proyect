import Product from "./views/Product";
import Home from "./views/Home";
import HomeAdmin from "./views/Home admin";
import UploadProduct from "./views/UploadProduct";
import Cart from "./views/Cart";
import Login from "./views/Login";
import LoginAdmin from "./views/LoginAdmin";
import Register from "./views/Register";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';

import Layout from "./components/Layout";
import LayoutAdmin from "./components/LayoutAdmin";
import { CartProvider } from "./context/CartContext";
import { isLoggedInUser } from "./services/authService";
import ProductAdmin from "./views/ProductAdmin";
import LayoutAdminLogin from "./components/LayoutAdminLogin";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInUser);

  function handleLogin() {
    console.log("Login");
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    window.location.href = "/login";
  }


  function NotFound() {
    return (
      <div>
        <h1>La página que busca no existe</h1>
      </div>
    );
  }

  //Referencia las rutas a las que se quiere usar un componente especifico
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}/>}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            
            <Route path="product/:id" element={<Product />} />
            
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register  onLogin={handleLogin}/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/admin" element={<LayoutAdmin isLoggedIn={isLoggedIn} onLogout={handleLogout}/>}>

            <Route path="/admin/home" element={<HomeAdmin />} />
            <Route path="product/edit/:id" element={<ProductAdmin />} />
            <Route path="product/upload" element={<UploadProduct />} />
          </Route>
          <Route path="/admin" element={<LayoutAdminLogin isLoggedIn={isLoggedIn} onLogout={handleLogout}/>}>
            <Route index element={<LoginAdmin />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
