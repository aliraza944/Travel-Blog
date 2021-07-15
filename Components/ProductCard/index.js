import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Image from "next/image";
import useStyles from "./Styles";
import product1 from "../../public/Images/product-image-1.jpg";
const ProductCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}>
        <Image
          layout="responsive"
          width={500}
          height={400}
          src={product1}
        ></Image>
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.featuredVolume}>
          Volume twelve
        </Typography>
        <div className={classes.titleandprice}>
          <Typography variant="h6" className={classes.productTitle}>
            The Water Volume
          </Typography>
          <Typography variant="subtitle1" className={classes.productPrice}>
            $12
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
