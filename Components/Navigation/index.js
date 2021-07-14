import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
function Elements({ mobile }) {
  const classes = useStyles();
  return (
    <>
      {mobile && <Divider style={{ margin: "40px 0 10px 0" }} />}
      <div className={mobile ? classes.drawer : classes.navItems}>
        <Typography noWrap>Featured Stories</Typography>
        <Typography noWrap>Journal</Typography>
        <Typography noWrap>Volumes</Typography>
        <Typography noWrap>About us</Typography>
      </div>
    </>
  );
}

function Navigation(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar>
            {" "}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon style={{ fontSize: "1.8em" }} />
            </IconButton>
            <Typography variant="h5" noWrap className={classes.title}>
              Another Escape
            </Typography>
            <Elements />
            <div className={classes.searchIcon}>
              <SearchIcon style={{ fontSize: "1.8em" }} />
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <Elements mobile />
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
