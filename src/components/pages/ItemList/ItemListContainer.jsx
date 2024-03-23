import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (category) {
      let collectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = collectionFiltered;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayProductos = res.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });
        setItems(arrayProductos);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <>
      {loading ? (
        <div className="spinnerContainer">
          <CircularProgress className="spinner" />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
