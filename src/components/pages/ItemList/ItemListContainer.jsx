import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const cargarProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (products.length > 0) {
          resolve(products);
        } else {
          reject("error: el array de productos esta vació");
        }
      }, 2000);
    });
    setLoading(true);
    cargarProductos
      .then((res) => {
        if (category) {
          const filterProducts = res.filter(
            (product) => product.category === category
          );
          setItems(filterProducts);
        } else {
          setItems(res);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
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
