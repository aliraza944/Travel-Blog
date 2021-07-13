import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          overflow: "hidden",
        },
        body: {
          fontFamily: "Gorditas ,Helvetica Neue,sans-serif",
        },
        ".responsiveImage": {
          width: "100%",
          height: "auto",
        },
        ".verticleText": {
          writingMode: "vertical-rl",
        },
      },
    },
  },
});

export default theme;
