function Checkout({ submitForm, capturar }) {
  return (
    <>
      <h1>Checkout</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={capturar}
          name="firstName"
        />
        <input
          type="text"
          placeholder="Ingresa tu apellido"
          onChange={capturar}
          name="lastName"
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Checkout;
