import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: "0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    boxShadow: "none",
  },
  media: {
    width: "100%",
    marginRight: "10px",
  },
  content: {
    width: "100%",
    display: "flex",
    padding: "0px ",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },

    alignItems: "baseline",
    justifyContent: "space-between",
  },
  sideTitle: {
    fontSize: "1em",
    letterSpacing: "2.2px",
    textTransform: "uppercase",
    writingMode: "horizontal-tb",

    [theme.breakpoints.up("md")]: {
      writingMode: "vertical-rl",
      textAlign: "center",
    },
  },
  bottomTag: {
    fontSize: "1.2em",
    color: "#2222229e",
    textTransform: "uppercase",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  bottomTitle: {
    fontSize: "1.8em",
    textTransform: "capitalize",
    color: "#000",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
}));
export default useStyles;
