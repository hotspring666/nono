import { container } from "assets/jss/material-kit-pro-react.js";

const appStyle = (theme) => ({
  page: {
    display: "flex",
  },
  container: {
    ...container,
    marginTop: "30px",
    zIndex: 1,
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  content: {
    flexGrow: 1,
  },
  children: {
    minHeight: "100vh",
    paddingBottom: 100,
  },
});

export default appStyle;
