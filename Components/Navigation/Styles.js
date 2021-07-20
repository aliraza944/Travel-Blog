import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "20px 0 20px 0",
    color: "black",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },

  appbar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    height: "80px",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  navItems: {
    display: "none",
    textAlign: "center",
    textTransform: "capitalize",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  Elements: {
    fontSize: "1.2em",
    letterSpacing: "1px",
    fontWeight: 300,
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
    flexGrow: 0,
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
    color: "black",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5em",
      textAlign: "left",
    },
    "& > a": {
      color: "black",
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
