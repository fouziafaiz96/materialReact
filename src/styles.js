import * as React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    color: (props) => props.color,
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardGrid: {
    padding: "40px 0",
  },
  main: {
    padding: "20px",
  },
  footer: {
    // backgroundColor: "#1976d2",
  },
});

export default useStyles;
