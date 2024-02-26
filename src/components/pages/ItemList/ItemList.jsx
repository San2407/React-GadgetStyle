import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";

const ItemList = ({ items }) => {
  return (
    <main className="itemListContainer">
      {items.map((item) => {
        return (
          <Card sx={{ maxWidth: 345 }} className="itemCard" key={item.id}>
            <CardMedia
              component="img"
              height="194"
              image={item.img}
              title={item.title}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" compoment="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <ItemCountContainer stock={item.stock} />
            </CardActions>
          </Card>
        );
      })}
    </main>
  );
};

export default ItemList;
