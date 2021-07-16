import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import useStyles from "./Styles";
import product1 from "../../public/Images/product-image-1.jpg";
const products = [
  {
    volume: "volume twelve",
    title: "the water volume",
    price: "12.00",
    thumbnail: "/Images/product-image-1.jpg",
  },
  {
    volume: "volume eleven",
    title: "the frozen volume",
    price: "12.00",
    thumbnail: "/Images/product-image-2.jpg",
  },
  {
    volume: "volume ten",
    title: "the altitudes volume",
    price: "12.00",
    thumbnail: "/Images/product-image-3.jpg",
  },
];
const ProductCard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container style={{ marginTop: "40px" }}>
        {products.map((product) => {
          return (
            <Grid item xs={12} md={4} key={product.title}>
              <Card className={classes.root}>
                <CardMedia className={classes.media}>
                  <Image
                    layout="responsive"
                    width={500}
                    height={400}
                    src={product.thumbnail}
                  ></Image>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.featuredVolume}>
                    {product.volume}
                  </Typography>
                  <div className={classes.titleandprice}>
                    <Typography variant="h6" className={classes.productTitle}>
                      {product.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={classes.productPrice}
                    >
                      $ {product.price}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductCard;
