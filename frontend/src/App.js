import Product from "./views/Product";
import ProductCopy from "./views/Product copy";
import Home from "./views/Home";
import HomeCopy from "./views/Home copy";
import HomeAdmin from "./views/Home admin";
import UploadProduct from "./views/UploadProduct";
import Cart from "./views/Cart";
import Login from "./views/Login";
import LoginAdmin from "./views/Login Admin";
import Register from "./views/Register";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeCopy />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="/admin/home" element={<HomeAdmin />} />
          <Route path="Product/:id" element={<Product />} />
          <Route path="product-/:id" element={<ProductCopy />} />
          <Route path="Product/upload" element={<UploadProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
