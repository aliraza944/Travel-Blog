import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "100px 0 0 0",
    fontFamily: "Roboto",
  },
  coverimagecontainer: {
    width: "100%",
  },
  title: {
    fontSize: "2em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "4em",
    },
  },

  blogcontent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    textAlign: "center",
  },
  mdcontent: {
    width: "100%",
    textAlign: "center",

    [theme.breakpoints.up("sm")]: {
      width: "40%",
      textAlign: "left",
    },

    "& p": {
      fontSize: "1em",
      letterSpacing: "0.08em",
      lineHeight: 1.8,
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.8em",
      },
      "& h2": {
        fontSize: "2em",
        fontWeight: "300",
        [theme.breakpoints.up("sm")]: {
          fontSize: "8em",
        },
      },
    },
  },
}));

export default useStyles;
