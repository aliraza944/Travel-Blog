import Card from "../Card";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";

const FeaturedSection = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.featuredContainer}>
        <Typography className={classes.featuredText}>
          {" "}
          Featured Story
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card />
          </Grid>
        </Grid>
      </div>
      <div className={classes.secondGrid}>
        {" "}
        <Grid container>
          <Grid item xs={12} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FeaturedSection;
