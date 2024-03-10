import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/*agregar el footer*/}
    </>
  );
};

export default Layout;
