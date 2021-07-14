import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  featuredContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px 20px",
    margin: "40px 0 0 0 ",
    flexDirection: "row",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
export default useStyles;
