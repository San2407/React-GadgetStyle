import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { AgregarDocs } from "../../agregarDocs";
const Layout = () => {
  return (
    <>
      <Navbar />
      <AgregarDocs />
      <Outlet />
      {/*agregar el footer*/}
    </>
  );
};

export default Layout;
