import { useState } from "react";
import Checkout from "./checkout";
function CheckoutContainer() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Se envió el formulario");
    console.log(userInfo);
  };
  const capturar = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return <Checkout submitForm={submitForm} capturar={capturar} />;
}

export default CheckoutContainer;
