import useStyles from "./Styles";
import { Grid, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Pinterest from "@material-ui/icons/Pinterest";
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justifyContent="center" spacing={4}>
        <Grid item xs={12} md={6} className={classes.joinUs}>
          <Typography className={classes.footerText}>
            Another Escape is an independent media company championing outdoor
            lifestyle, environmental stewardship and regenerative living. We
            encourage people to connect with the natural world in meaningful
            ways so they may become active stewards of our planet.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.joinUs}>
            <Typography style={{ flexGrow: "0.1" }}>Join Us</Typography>
            <TextField
              className={classes.textField}
              id="email"
              label="Email"
              variant="outlined"
            />
          </div>
          <div className={classes.socialIcons}>
            <FacebookIcon />
            <InstagramIcon />
            <PinterestIcon />
            <LinkedInIcon />
          </div>
        </Grid>
      </Grid>
      <div className={classes.joinUs}>
        <Typography>All Rights Recieved</Typography>
      </div>
    </div>
  );
};

export default Footer;
