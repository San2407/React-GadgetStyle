import { useState } from "react";
import ItemCount from "./itemCount";

const ItemCountContainer = (/* poner stock del asyncMock*/) => {
  const [count, setCounter] = useState(1);

  const sumar = () => {
    if (count < 5 /* poner stock del asyncMock*/) {
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
