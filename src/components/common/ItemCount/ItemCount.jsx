const ItemCount = ({ counter, addOne, subOne }) => {
  const isDisabled = counter === 1;
  return (
    <div className="itemCountContainer">
      <div className="itemCount">
        <button
          onClick={subOne}
          disabled={isDisabled}
          className={`buttonItemCount ${isDisabled ? "disabledButton" : ""}`}
        >
          -
        </button>
        <h4 className="buttonItemCount">{counter}</h4>
        <button onClick={addOne} className="buttonItemCount">
          +
        </button>
      </div>

      <button className="buttonAddCart">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
