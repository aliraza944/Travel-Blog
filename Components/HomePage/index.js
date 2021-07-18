import useStyles from "./Styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { useUpdateHomeState } from "../../Context";
const pageState = false;
const HomePage = () => {
  const classes = useStyles();
  const updateHome = useUpdateHomeState();
  return (
    <>
      <div className={classes.root}></div>
      <div className={classes.landingcontent}>
        <Typography variant="h5" noWrap className={classes.title}>
          Another Escape
        </Typography>
        <Typography variant="h6" className={classes.companydescription}>
          Another Escape is an independent media company <br />
          championing outdoor lifestyle, environmental stewardship and <br />
          regenerative living.
        </Typography>
        <ExpandMoreIcon
          className={classes.expandIcon}
          onClick={() => updateHome(false)}
        />
      </div>
    </>
  );
};

export default HomePage;
