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
          <div key={item.id} className="itemListProducts">
            <Card
              sx={{
                maxWidth: 345,
                width: "100%",
                height: "100%",
              }}
            >
              <Link to={`/item/${item.id}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    title={item.title}
                    sx={{
                      objectFit: "contain",
                    }}
                  />
                  <CardContent sx={{ height: "150px" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ fontSize: "25px", fontWeight: "400" }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </div>
        );
      })}
    </main>
  );
};

export default ItemList;
