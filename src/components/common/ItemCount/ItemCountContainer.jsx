import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  const [count, setCounter] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCounter(count + 1);
    } else {
      alert("Stock máximo");
    }
  };
  const restar = () => {
    if (count > 1) {
      setCounter(count - 1);
    }
  };
  return (
    <ItemCount counter={count} addOne={sumar} subOne={restar} onAdd={onAdd} />
  );
};

export default ItemCountContainer;
