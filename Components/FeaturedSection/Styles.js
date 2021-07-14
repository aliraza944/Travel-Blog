import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  featuredContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px 20px",
    margin: "40px 0 0 0 ",
    flexDirection: "row",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  featuredText: {
    writingMode: "vertical-rl",
    margin: "0 0 0 2em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      writingMode: "horizontal-tb",
      width: "100%",
      margin: "0 0 0 0em",
    },
  },
  secondGrid: {
    margin: "100px 10px",
    padding: "0px 20px",
  },
}));
export default useStyles;
