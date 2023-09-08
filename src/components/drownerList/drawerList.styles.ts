import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  btn: {
    width: "100%",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
    borderRadius: "8px",
  },
  listItem: {
    cursor: "pointer",
    border: "none",
    backgroundColor: "inherit",
    padding: "16px 8px",
  },
  arrow: {
    transition: "transform 0.3s ease-in-out",
    transform: "rotate(0deg)",
  },
  arrowOpen: {
    transition: "transform 0.3s ease-in-out",
    transform: "rotate(180deg)",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "inline-flex",
    alignItems: "center",
    width: "100%",
  },
  innerList: {
    margin: "0 0 0 8px",
    borderLeft: "5px solid #e0e0e0",
    transition: "all 0.3s ease-in-out",
  },
  innerListOpened: {
    position: "static",
    height: "auto",
    overflow: "visible",
    opacity: 1,
  },
  innerListClosed: {
    position: "absolute",
    height: 0,
    overflow: "hidden",
    opacity: 0,
  },
  innerBtn: {
    width: "100%",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
});
