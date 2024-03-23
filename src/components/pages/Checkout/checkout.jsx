import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
function Checkout({ submitForm, capturar, orderId, cart, totalPrice }) {
  let total = totalPrice();
  return (
    <div className="checkoutContainer">
      {orderId ? (
        <div className="orderConfirmContainer">
          <h1>Pedido Confirmado</h1>
          <div className="orderConfirmCarta">
            <h2>Su pedido fue realizado con éxito</h2>
            <h4>Gracias por elegirnos, tu numero de compra es {orderId}</h4>
          </div>
        </div>
      ) : (
        <section className="gridCheckout">
          <form onSubmit={submitForm}>
            <h3>Datos de contacto</h3>
            <div className="inputGroup">
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  onChange={capturar}
                  name="name"
                  className="inputName"
                />
                <div className="iconCheckout">
                  <PersonIcon />
                </div>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Ingresa tu teléfono"
                  onChange={capturar}
                  name="phone"
                  className="inputPhone"
                />
                <div className="iconCheckout">
                  <PhoneIcon />
                </div>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Ingresa tu email"
                  onChange={capturar}
                  name="email"
                  className="inputEmail"
                />
                <div className="iconCheckout">
                  <EmailIcon />
                </div>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Repite tu email"
                  onChange={capturar}
                  name="emailConfirm"
                  className="inputEmailConfirm"
                />
                <div className="iconCheckout">
                  <EmailIcon />
                </div>
              </div>
              <div className="inputGroup">
                <div className="finalizarCompra">
                  <button type="submit">Comprar</button>
                </div>
              </div>
            </div>
          </form>
          <section className="resumenCheckout">
            <div className="resumenItemBox">
              <h3 className="resumenTitulo">Orden de compra</h3>
              {cart.map((product) => {
                return (
                  <div className="resumenCardBox" key={product.id}>
                    <div className="cardBox">
                      <div className="cardBoxImg">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="imgResumen"
                        />
                        <div className="cardBoxInfo">
                          <h4 className="nombreProducto">{product.title}</h4>
                          <div className="resumenCantidadPrecio">
                            <p className="resumenCantidad">
                              Cantidad:{product.quantity}
                            </p>
                            <p>${product.price * product.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="resumenPrecioTotal">
                <span>Total:</span>
                <p>${total}</p>
              </div>
            </div>
          </section>
        </section>
      )}
    </div>
  );
}

export default Checkout;
