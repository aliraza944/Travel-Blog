import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "20px 0 20px 0",
    color: "black",
    backgroundColor: "white",
  },

  appbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  navItems: {
    display: "none",
    width: "40%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  searchIcon: {
    display: "none",

    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  },

  menuButton: {
    justifyContent: "flex-start",
    marginRight: theme.spacing(0),
    flexGrow: 1,
    fontSize: "1.5em",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },

  title: {
    flexGrow: 1,
    textTransform: "capitalize",
    fontFamily: "Playfair Display, serif;",
    textAlign: "center",
    fontSize: "2em",
    [theme.breakpoints.up("md")]: {
      fontSize: "3em",
      textAlign: "left",
    },
  },
  drawer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: "5px 0",
    },
  },
}));
export default useStyles;