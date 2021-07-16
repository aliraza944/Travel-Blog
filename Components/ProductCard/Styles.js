import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0px 0 0 0",
    backgroundColor: "#eee",
    boxShadow: "none",
  },
  cardContent: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: "16px 32px",
  },
  featuredVolume: {
    color: "#4d4d4d",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontSize: "1em",
    fontWeight: 400,
    margin: "0 0 20px 0",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2em",
    },
  },
  titleandprice: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  media: {
    width: "100%",
    marginRight: "10px",
  },
  productTitle: {
    margin: "0 0 0px 0",
    fontSize: "1.2em",
    fontWeight: "500",
    textTransform: "capitalize",
    [theme.breakpoints.up("md")]: {
      margin: "0 0 0px 0",
      fontWeight: "600",

      fontSize: "1.4em",
    },
  },
  productPrice: {
    fontSize: "1em",
    color: "#4d4d4d",
    [theme.breakpoints.up("md")]: {
      margin: "0 0 10px 0",

      fontSize: "1.2em",
    },
  },
}));

export default useStyles;
