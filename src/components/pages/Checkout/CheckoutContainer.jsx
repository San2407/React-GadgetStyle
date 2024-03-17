import { useContext, useState } from "react";
import Checkout from "./checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
function CheckoutContainer() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, clear } = useContext(CartContext);
  let total = totalPrice();

  const submitForm = (e) => {
    e.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total: total,
      //date: función date que estaría en el CartContext
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
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return (
    <Checkout submitForm={submitForm} capturar={capturar} orderId={orderId} />
  );
}

export default CheckoutContainer;
