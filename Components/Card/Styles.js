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
    backgroundColor: "transparent",
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

  sideTitleContainer: {
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      width: "fit-content",
    },
  },
  sideTitle: {
    fontSize: "1em",
    letterSpacing: "2.2px",
    textTransform: "uppercase",
    writingMode: "horizontal-tb",
    width: "100%",
    textAlign: "center",
    margin: "20px 0 0 0",
    [theme.breakpoints.up("md")]: {
      writingMode: "vertical-rl",
      textAlign: "center",
      width: "fit-content",
    },
  },
  bottomTag: {
    fontSize: "1.2em",
    color: "#2222229e",
    textTransform: "uppercase",
    margin: "20px 0",
  },
  bottomTitle: {
    fontSize: "1.8em",
    textTransform: "capitalize",
    color: "#000",
    fontWeight: 500,
    margin: "0 0 50px 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4em",
      fontWeight: 500,
    },
  },
  tagesandtitles: {
    width: "100%",
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
}));
export default useStyles;
