import Card from "../Card";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";
import Button from "../StyledButton";
function FeaturedSection({ data }) {
  const herodata = data.filter(
    (obj) =>
      obj.frontMatter.type === "featured" && obj.frontMatter.isHero === true
  );
  const nonherodata = data.filter(
    (obj) =>
      obj.frontMatter.type === "featured" && obj.frontMatter.isHero === false
  );
  const classes = useStyles();
  return (
    <>
      <div className={classes.featuredContainer}>
        <Typography className={classes.featuredText}>
          {" "}
          Featured Story
        </Typography>

        <Grid container spacing={4}>
          {herodata.map((data) => {
            return (
              <Grid key={data.slug} item xs={12} md={6}>
                <Card
                  sideTitle={data.frontMatter.sideTitle}
                  imgsrc={data.frontMatter.thumbnailImage}
                  bottomTitle={data.frontMatter.title}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div className={classes.secondGrid}>
        {" "}
        <Grid container spacing={2}>
          {nonherodata.map((data) => {
            return (
              <Grid key={data.slug} item xs={12} md={4}>
                <Card
                  sideTitle={data.frontMatter.sideTitle}
                  imgsrc={data.frontMatter.thumbnailImage}
                  bottomTitle={data.frontMatter.title}
                  featured
                />
              </Grid>
            );
          })}
        </Grid>
        <div>
          <Button title=" view all featured stories" />
        </div>
      </div>
    </>
  );
}

export default FeaturedSection;
