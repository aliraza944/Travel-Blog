import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    margin: "-19px 0 0 0",
    padding: "0",
    backgroundImage: `url(${"/Images/homepage.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
export default useStyles;
