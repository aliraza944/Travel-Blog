import Card from "../Card";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";
import Button from "../StyledButton";
import { useSpring, animated, config } from "react-spring";

function FeaturedSection({ data, type, buttonText }) {
  const herodata = data.filter(
    (obj) => obj.frontMatter.type === type && obj.frontMatter.isHero === true
  );
  const nonherodata = data.filter(
    (obj) => obj.frontMatter.type === type && obj.frontMatter.isHero === false
  );
  const fadeStyle = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: config.molasses,
    delay: 600,
  });

  const classes = useStyles();
  return (
    <>
      <animated.div style={fadeStyle} className={classes.featuredContainer}>
        <Typography className={classes.featuredText}> {type}</Typography>

        <Grid container spacing={2}>
          {herodata.map((data) => {
            return (
              <Grid
                key={data.slug}
                item
                xs={12}
                md={type === "featured" ? 6 : 3}
              >
                <Link href={`/blog/${data.slug}`}>
                  <a>
                    <Card
                      sideTitle={data.frontMatter.sideTitle}
                      imgsrc={data.frontMatter.thumbnailImage}
                      bottomTitle={data.frontMatter.title}
                      bottomTag={data.frontMatter.bottomTag}
                      featured={type === "journal" && true}
                    />
                  </a>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </animated.div>
      <div className={classes.secondGrid}>
        {" "}
        <Grid container spacing={2}>
          {nonherodata.map((data) => {
            return (
              <Grid
                key={data.slug}
                item
                xs={12}
                md={type === "featured" ? 4 : 3}
              >
                <Link href={`/blog/${data.slug}`}>
                  <a>
                    <Card
                      sideTitle={data.frontMatter.sideTitle}
                      imgsrc={data.frontMatter.thumbnailImage}
                      bottomTitle={data.frontMatter.title}
                      bottomTag={data.frontMatter.bottomTag}
                      featured
                    />
                  </a>
                </Link>
              </Grid>
            );
          })}
        </Grid>
        <div>
          <Button title={`view all ${buttonText}`} />
        </div>
      </div>
    </>
  );
}

export default FeaturedSection;
