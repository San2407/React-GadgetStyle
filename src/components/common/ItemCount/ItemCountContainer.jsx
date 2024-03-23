import { useState } from "react";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";

const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  const [count, setCounter] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCounter(count + 1);
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "error",
        title: "Stock máximo",
      });
    }
  };
  const restar = () => {
    if (count > 1) {
      setCounter(count - 1);
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1300,
    timerProgressBar: true,
  });

  const showAlert = () => {
    Toast.fire({
      icon: "success",
      title: "Se ha agregado al carrito",
    });
  };

  return (
    <ItemCount
      counter={count}
      addOne={sumar}
      subOne={restar}
      onAdd={onAdd}
      showAlert={showAlert}
    />
  );
};

export default ItemCountContainer;
