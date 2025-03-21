import NavbarCom from "../components/NavbarCom";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <NavbarCom />

      <Outlet />
    </>
  );
}

export default MainLayout;
