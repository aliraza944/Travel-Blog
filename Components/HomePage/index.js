import useStyles from "./Styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { useUpdateHomeState } from "../../Context";
import { useSpring, animated, config } from "react-spring";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [fade, setFade] = useState(false);
  const fadeStyle = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: fade ? 0 : 1 },
    config: config.slow,
    delay: fade ? 200 : 600,
  });
  const classes = useStyles();
  const updateHome = useUpdateHomeState();
  return (
    <>
      <div className={classes.root}></div>

      <animated.div style={fadeStyle} className={classes.landingcontent}>
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
          onClick={() => {
            setFade(true);
            setTimeout(() => updateHome(false), 700);
          }}
        />
      </animated.div>
    </>
  );
};

export default HomePage;
