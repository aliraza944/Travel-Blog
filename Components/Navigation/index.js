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
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import Slide from "@material-ui/core/Slide";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Elements({ mobile }) {
  const classes = useStyles();
  return (
    <>
      {mobile && <Divider style={{ margin: "40px 0 10px 0" }} />}
      <div className={mobile ? classes.drawer : classes.navItems}>
        <Typography className={classes.Elements} noWrap>
          Featured Stories
        </Typography>
        <Typography className={classes.Elements} noWrap>
          Journal
        </Typography>
        <Typography className={classes.Elements} noWrap>
          Volumes
        </Typography>
        <Typography className={classes.Elements} noWrap>
          About us
        </Typography>
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
        <HideOnScroll {...props}>
          <AppBar color="transparent" elevation={0} className={classes.appbar}>
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
        </HideOnScroll>
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
