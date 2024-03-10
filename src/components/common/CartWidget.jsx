import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartWidget() {
  const { totalItems } = useContext(CartContext);

  let total = totalItems();

  return (
    <div className="cartContainer">
      <Badge badgeContent={total} color="error">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
}
