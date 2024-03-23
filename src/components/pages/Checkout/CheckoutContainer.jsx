import { useContext, useState } from "react";
import Checkout from "./checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { FechaContext } from "../../../context/DateContext";
function CheckoutContainer() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [emailConfirm, setEmailConfirm] = useState("");
  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, clear } = useContext(CartContext);
  const fecha = useContext(FechaContext);
  let total = totalPrice();

  const submitForm = (e) => {
    e.preventDefault();
    if (userInfo.email !== emailConfirm) {
      alert("Los correos electrónicos no coinciden");
      return;
    }
    let order = {
      buyer: userInfo,
      items: cart.map((item) => ({
        ...item,
        date: fecha.toLocaleDateString(),
      })),
      total: total,
    };

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((res) => setOrderId(res.id));
    cart.forEach((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });
    clear();
  };
  const capturar = (e) => {
    if (e.target.name === "emailConfirm") {
      setEmailConfirm(e.target.value);
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  return (
    <Checkout
      submitForm={submitForm}
      capturar={capturar}
      orderId={orderId}
      cart={cart}
      totalPrice={totalPrice}
    />
  );
}

export default CheckoutContainer;
