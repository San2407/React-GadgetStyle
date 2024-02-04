import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
export default function CartWidget() {
  return (
    <div className="cartContainer">
        <Badge badgeContent={4} color="error">
        <ShoppingCartIcon />
        </Badge>
    </div>
  )
}
