import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import PiePagina from "./PiePagina";

function Layout({isLoggedIn, onLogout}) {

  return (
    <div className="principal">
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout}/>
      <Outlet/>
      <PiePagina/>
    </div>
  );
};

export default Layout;
