import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ShoppingBag as ShoppingBagIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";

function Cart({ cart, clear, removeItem, totalPrice }) {
  let total = totalPrice();
  const isCartIsEmpty = cart.length === 0;
  return (
    <>
      <div className="carritoContainer">
        <h2>Carrito</h2>
        {isCartIsEmpty ? (
          <div className="carritoVacio">
            <p>Tu carrito esta vació</p>
            <div className="comenzarComprar">
              <Link to="/">
                <ShoppingBagIcon />
                <span>Comenzar a comprar</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titulos">
              <h3 className="productoTitulo">Producto</h3>
              <h3 className="precioTitulo">Precio</h3>
              <h3 className="cantidadTitulo">Cantidad</h3>
              <h3 className="totalTitulo">Total</h3>
            </div>
            <div className="itemsCarrito">
              {cart.map((product) => (
                <div className="itemCarrito" key={product.id}>
                  <div className="carritoProducto">
                    <img src={product.img} alt={product.title} />
                    <div>
                      <h3>{product.title}</h3>
                      <button onClick={() => removeItem(product.id)}>
                        Eliminar
                      </button>
                    </div>
                  </div>
                  <div className="carritoPrecio">${product.price}</div>
                  <div className="carritoCantidad">{product.quantity}</div>
                  <div className="carritoPrecioTotal">
                    ${product.price * product.quantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="carritoResumen">
              <button className="limpiarCarrito" onClick={clear}>
                Limpiar Carrito
              </button>
              <div className="carritoCheckout">
                <div className="totalCarrito">
                  <span>Total</span>
                  <span className="precioTotal">${total}</span>
                </div>
                <Link to="/checkout">
                  <Button variant="contained">Finalizar Compra</Button>
                </Link>
                <div className="seguirComprando">
                  <Link to="/">
                    <ArrowBackIcon />
                    <span>Seguir Comprando</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
