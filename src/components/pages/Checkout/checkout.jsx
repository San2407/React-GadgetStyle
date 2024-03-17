function Checkout({ submitForm, capturar, orderId }) {
  return (
    <>
      <h1>Checkout</h1>

      {orderId ? (
        <h1>Gracias, tu numero de compra es {orderId}</h1>
      ) : (
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
          />
          <input
            type="text"
            placeholder="Ingresa tu teléfono"
            onChange={capturar}
            name="phone"
          />
          <input
            type="text"
            placeholder="Ingresa tu email"
            onChange={capturar}
            name="email"
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </>
  );
}

export default Checkout;
