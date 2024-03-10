import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <main className="itemDetailContainer">
      <div key={item.id} className="itemDetailGrid">
        <img src={item.img} alt={item.title} className="gridPhoto" />
        <div className="detalles">
          <div className="precioYNombre">
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
          </div>
          <p>{item.description}</p>
          {initial && <h3>Ya tienes {initial} en el carrito</h3>}
          <ItemCountContainer
            stock={item.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
