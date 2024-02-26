import { useState } from "react";
import ItemCount from "./itemCount";

const ItemCountContainer = ({ stock }) => {
  const [count, setCounter] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCounter(count + 1);
    }
  };
  const restar = () => {
    if (count > 1) {
      setCounter(count - 1);
    }
  };
  return <ItemCount counter={count} addOne={sumar} subOne={restar} />;
};

export default ItemCountContainer;
