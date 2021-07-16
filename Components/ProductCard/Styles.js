import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "100px 0 0 0",
    backgroundColor: "#eee",
    boxShadow: "none",
  },
  cardContent: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: "16px 25px",
  },
  featuredVolume: {
    color: "#4d4d4d",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontSize: "1.2em",
    fontWeight: 600,
    margin: "0 0 20px 0",
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
    margin: "0 0 20px 0",
    fontSize: "1.4em",
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: "1.5em",
    color: "#4d4d4d",
  },
}));

export default useStyles;
