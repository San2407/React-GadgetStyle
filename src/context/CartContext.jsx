import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => {
    let exist = cart.some((element) => element.id === id);
    return exist;
  };
  const addItem = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newQuantity = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });
      setCart(newQuantity);
    } else {
      setCart([...cart, product]);
    }
  };
  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    let newArray = cart.filter((element) => element.id !== id);
    setCart(newArray);
  };
  const totalItems = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };
  const totalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity * element.price;
    }, 0);
    return total;
  };
  const quantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    if (product) {
      return product.quantity;
    } else {
      return product;
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clear,
        removeItem,
        totalItems,
        totalPrice,
        quantityById,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
