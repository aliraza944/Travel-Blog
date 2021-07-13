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
  },
  media: {
    width: "100%",
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
    fontSize: "1.2em",
  },
});
export default useStyles;