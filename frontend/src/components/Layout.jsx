import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import PiePagina from "./PiePagina";

const Layout = () => {
  return (
    <div className="principal">
      <Navbar/>
      <Outlet/>
      <PiePagina/>
    </div>
  );
};

export default Layout;
