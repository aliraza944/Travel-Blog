import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "0",
    width: "40%",
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
    flexDirection: "row",
    padding: "0px ",

    alignItems: "baseline",
    justifyContent: "space-between",
  },
  sideTitle: {
    fontSize: "1em",
    letterSpacing: "2.2px",
    textTransform: "uppercase",
  },
  bottomTag: {
    fontSize: "1.2em",
    color: "#222",
    textTransform: "uppercase",
  },
  bottomTitle: {
    fontSize: "1.8em",
    textTransform: "capitalize",
  },
});
export default useStyles;
