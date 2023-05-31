import { Outlet } from "react-router-dom";

import PiePagina from "./PiePagina";
import NavbarAdminLogin from "./NavbarAdminLogin";

function LayoutAdminLogin({isLoggedIn, onLogout}) {

  return (
    <div className="principal">
      <NavbarAdminLogin isLoggedIn={isLoggedIn} onLogout={onLogout}/>
      <Outlet/>
      <PiePagina/>
    </div>
  );
};

export default LayoutAdminLogin;
