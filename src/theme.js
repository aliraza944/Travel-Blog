import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          // overflowX: "hidden",
          boxSizing: "border-box",
        },
        body: {
          fontFamily: "Gorditas ,Helvetica Neue,sans-serif",
          backgroundColor: "white",
        },
        ".responsiveImage": {
          width: "100% !important",
          height: "auto important",
          objectFit: "contain",
          position: "relative !important",
        },
        ".verticleText": {
          writingMode: "vertical-rl",
        },
      },
    },
  },
});

export default theme;
