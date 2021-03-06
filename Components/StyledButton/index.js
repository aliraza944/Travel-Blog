import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    border: "1px solid #747474",
    color: "black",
    textTransform: "uppercase",
    letterSpacing: "2px",
    margin: "8em 0 0 0",
    boxShadow: "none",
    fontSize: "1em",
    pading: "10px 20px",
    width: "300px",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8em",
      pading: "5px 10px",
      width: "200px",
    },
  },
}));

const StyledButton = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} variant="contained">
      {props.title}
    </Button>
  );
};

export default StyledButton;
