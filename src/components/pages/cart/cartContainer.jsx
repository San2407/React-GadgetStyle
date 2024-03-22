import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";

function CartContainer() {
  const { cart, clear, removeItem, totalPrice } = useContext(CartContext);

  return (
    <>
      <Cart
        cart={cart}
        clear={clear}
        removeItem={removeItem}
        totalPrice={totalPrice}
      />
    </>
  );
}

export default CartContainer;
