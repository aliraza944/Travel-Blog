import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    margin: "0px 0 0 0",
    padding: "0",
    overflow: "hidden",
    backgroundImage: `url(${"/Images/homepage.jpg"})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: "brightness(60%)",
  },
  landingcontent: {
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "40%",
  },

  title: {
    textTransform: "capitalize",
    fontFamily: "Playfair Display, serif;",
    textAlign: "center",
    fontSize: "2em",
    color: "white",

    [theme.breakpoints.up("md")]: {
      fontSize: "3em",
    },
  },
  companydescription: {
    textTransform: "capitalize",
    fontFamily: " serif;",
    textAlign: "center",
    fontSize: "1.2em",
    color: "white",
    letterSpacing: "0.008em",
    [theme.breakpoints.up("md")]: {
      fontSize: "2em",
    },
  },
  expandIcon: {
    textAlign: "center",
    fontSize: "2em",
    color: "white",
    margin: "40px 0 0 0",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      fontSize: "6em",
    },
  },
}));
export default useStyles;
