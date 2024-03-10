import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

function CartContainer() {
  const { cart, clear, removeItem, totalPrice } = useContext(CartContext);
  let total = totalPrice();
  return (
    <>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>Nombre:{product.title}</h2>
          <h2>Cantidad:{product.quantity}</h2>
          <button onClick={() => removeItem(product.id)}>Eliminar</button>
        </div>
      ))}
      <h2>Total: ${total}</h2>
      <button onClick={clear}>Limpiar Carrito</button>
      <Link to="/checkout">
        <Button variant="contained">Finalizar Compra</Button>
      </Link>
    </>
  );
}

export default CartContainer;
