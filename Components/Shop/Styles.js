import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#eee",
    overflow: "hidden",
  },
  featuredText: {
    writingMode: "vertical-rl",
    margin: "2em 0 0 0em",
    width: "100%",

    textAlign: "left",
    display: "contents",
    fontFamily: "sans-serif",
    fontSize: "1em",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    [theme.breakpoints.down("md")]: {
      writingMode: "horizontal-tb",
      textAlign: "center",

      margin: "0 0 2em 0em",
    },
  },
  featuredProductGrid: {
    width: "100%",
    display: "flex",
  },
  productContent: {
    textAlign: "left",
    margin: "0 0 0 40px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      margin: "0 0 0 0px",
    },
  },
  featuredVolume: {
    color: "#4d4d4d",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontSize: "1.2em",
    fontWeight: 600,
  },
  featuredTitle: {
    color: "#000",
    letterSpacing: "0.08em",
    textTransform: "captilize",
    fontSize: "1.8em",
    fontWeight: 800,
  },
  feaaturedDescription: {
    letterSpacing: "0.08em",
    fontSize: "1.2em",
    fontWeight: 400,
    width: "60%",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "100%",
    },
  },
}));

export default useStyles;
