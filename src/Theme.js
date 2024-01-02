import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3596e7",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#757ce8",
      main: "#fffff",
      dark: "#002884",
      contrastText: "#fff",
    },
    red: {
      light: "#757ce8",
      main: "#FF0000",
      dark: "#002884",
      contrastText: "#fff",
    },
    gray: {
      light: "#757ce8",
      main: "   #696969",
      dark: "#002884",
      contrastText: "#fff",
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});

export default Theme;
