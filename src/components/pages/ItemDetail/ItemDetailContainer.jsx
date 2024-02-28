import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProduct } from "../../../productsMock";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getProduct(parseInt(id)).then((res) => {
      setItem(res);
      setLoading(false);
    });
  }, [id]);
  return (
    <>
      {loading ? (
        <div className="spinnerContainer">
          <CircularProgress className="spinner" />
        </div>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};
export default ItemDetailContainer;
