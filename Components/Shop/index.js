import useStyles from "./Styles";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";

import featuredProduct from "../../public/Images/featuredProduct.jpg";
import ProductCard from "../ProductCard";
const Shop = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.featuredText}>
        <span>shop</span>
      </div>
      <div className={classes.featuredProductGrid}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} style={{ display: "contents" }}>
            <Image src={featuredProduct} />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.productContent}>
              <Typography className={classes.featuredVolume}>
                Volume thirteen
              </Typography>
              <Typography className={classes.featuredTitle}>
                The Beloging Volume
              </Typography>
              <Typography className={classes.featuredDescription}>
                Nature is our home. Our biotic community comprises a wealth of
                species all interconnected and interdependent on one another,
                flourishing in a rich tapestry of life that spans the planet.
                For millions of years, we evolved in complete connection with
                the world around us.{" "}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <ProductCard />
    </div>
  );
};

export default Shop;
