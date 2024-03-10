import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/ItemList/ItemListContainer";
import Layout from "./components/layout/Layout";
import CartContainer from "./components/pages/cart/cartContainer";
import CheckoutContainer from "./components/pages/Checkout/CheckoutContainer";
import CartContextProvider from "./context/CartContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
