import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";

const ItemDetail = ({ item }) => {
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
          <ItemCountContainer stock={item.stock} />
        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
