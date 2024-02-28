import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <main className="itemListContainer">
      {items.map((item) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={item.id}>
            <CardActionArea
              style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
            >
              <Link to={`/item/${item.id}`}>
                <CardMedia
                  component="img"
                  height="180"
                  image={item.img}
                  title={item.title}
                  sx={{ objectFit: "contain", width: "100%" }}
                />
                <CardContent style={{ height: "150px" }}>
                  <Typography gutterBottom variant="h5" compoment="div">
                    {item.title}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        );
      })}
    </main>
  );
};

export default ItemList;
