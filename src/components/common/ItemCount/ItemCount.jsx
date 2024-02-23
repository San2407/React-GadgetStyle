const ItemCount = ({ counter, addOne, subOne }) => {
  return (
    <div>
      <button onClick={subOne} disabled={counter === 1 ? true : false}>
        restar
      </button>
      <h4>{counter}</h4>
      <button onClick={addOne}>Sumar</button>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
