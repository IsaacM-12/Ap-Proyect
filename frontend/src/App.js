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

import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";

function App() {
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
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<LoginAdmin />} />
            <Route path="/admin/home" element={<HomeAdmin />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="product/upload" element={<UploadProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
