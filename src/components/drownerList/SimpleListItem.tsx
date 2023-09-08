import React from "react";
import { useStyles } from "./drawerList.styles";
import { Link } from "react-router-dom";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { MenuItem } from "menuItems";

export interface SimpleListItemProps {
  item: MenuItem;
  toggleFunc?: (
    isOpen: boolean,
    e?: React.KeyboardEvent | React.MouseEvent
  ) => void;
}

const SimpleListItem: React.FC<SimpleListItemProps> = ({
  item,
}): React.ReactElement => {
  const { name, icon, link } = item;
  const classes = useStyles();

  return (
    <ListItem button component={"li"}>
      <Link to={link ?? ""} className={classes.link}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </Link>
    </ListItem>
  );
};

export default SimpleListItem;
