import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProduct } from "../../../productsMock";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addItem, quantityById } = useContext(CartContext);

  const initial = quantityById(id);
  useEffect(() => {
    setLoading(true);
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(() => setLoading(false));
  }, [id]);
  const onAdd = (cantidad) => {
    let productInfo = {
      ...item,
      quantity: cantidad,
    };
    addItem(productInfo);
  };
  if (loading) {
    return (
      <div className="spinnerContainer">
        <CircularProgress className="spinner" />
      </div>
    );
  }
  return (
    <>
      <ItemDetail item={item} onAdd={onAdd} initial={initial} />
    </>
  );
};
export default ItemDetailContainer;
