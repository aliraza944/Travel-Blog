import useStyles from "./Styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { useUpdateHomeState } from "../../Context";
import { useSpring, useTrail, animated, config } from "react-spring";
import { useState } from "react";

const items = [
  {
    key: 1,
    varient: "h5",
    text: " Another Escape",
  },
  {
    key: 2,
    varient: "h6",
    text: "Another Escape is an independent media company championing outdoor lifestyle, environmental stewardship and regenerative living.",
  },
];

const HomePage = () => {
  const [fade, setFade] = useState(false);
  const [toggle, setToggle] = useState(false);
  const fadeStyle = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: fade ? 0 : 1 },
    config: config.slow,
    delay: fade ? 200 : 600,
  });
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 600, friction: 600 },
    Y: toggle ? -800 : 0,
    from: { opacity: 1, x: 20, Y: 0 },
    delay: 100,
  });

  const iconAnimation = useSpring({
    loop: true,
    from: { y: 0 },
    to: { y: 20 },
    config: { mass: 4, tension: 400, friction: 200 },
    delay: 100,
  });

  const classes = useStyles();
  const updateHome = useUpdateHomeState();
  return (
    <>
      <div className={classes.root}></div>

      <animated.div style={fadeStyle} className={classes.landingcontent}>
        {trail.map(({ x, Y, ...rest }, index) => {
          return (
            <animated.div
              style={{
                ...rest,
                textAlign: "center",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                transform: Y.to((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              <Typography
                key={items[index].key}
                variant={items[index].varient}
                style={Y}
                className={
                  index === 0 ? classes.title : classes.companydescription
                }
              >
                {items[index].text}
              </Typography>
            </animated.div>
          );
        })}
        <animated.div style={iconAnimation}>
          <ExpandMoreIcon
            className={classes.expandIcon}
            onClick={() => {
              // setFade(true);
              setToggle(true);
              setTimeout(() => updateHome(false), 1000);
            }}
          />
        </animated.div>
      </animated.div>
    </>
  );
};

export default HomePage;
