import { Outlet } from "react-router-dom";

import NavbarAdmin from "./NavbarAdmin";
import PiePagina from "./PiePagina";

function LayoutAdmin({isLoggedIn, onLogout}) {

  return (
    <div className="principal">
      <NavbarAdmin isLoggedIn={isLoggedIn} onLogout={onLogout}/>
      <Outlet/>
      <PiePagina/>
    </div>
  );
};

export default LayoutAdmin;
