import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#d8d8d8",
    overflow: "hidden",
    width: "100%",
    padding: "40px 0 0 0",
  },
  footerText: {
    width: "100%",

    textalign: "center",
  },
  joinUs: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textField: {
    width: "60%",
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
  },
  socialIcons: {
    display: "flex",
    margin: "40px 0 0 0",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    "& > *": {
      margin: "0 40px 0 0",
      fontSize: "2.5em",
    },
  },
}));
export default useStyles;
