import React, { useState } from "react";
import { useStyles } from "./drawerList.styles";

import { MenuItem } from "menuItems";
import cn from "classnames";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import List from "@mui/material/List";
import { ButtonBase } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface AccordionListItemProps {
  item: MenuItem;
  toggleFunc: (
    isOpen: boolean,
    e?: React.KeyboardEvent | React.MouseEvent
  ) => void;
}

const AccordionListItem: React.FC<AccordionListItemProps> = ({
  item,
  toggleFunc,
}) => {
  const { name, icon, items } = item;
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const navigate = useNavigate();

  const handleClickItem = (link?: string) => () => {
    toggleFunc(false);
    navigate(link ?? "");
  };

  return (
    <>
      <ButtonBase className={classes.btn}>
        <ListItem
          component={"button"}
          onClick={() => setOpen(!open)}
          className={classes.listItem}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
          <ArrowDownIcon className={open ? classes.arrowOpen : classes.arrow} />
        </ListItem>
      </ButtonBase>
      {items && items.length > 0 && (
        <List
          className={cn(
            classes.innerList,
            open && classes.innerListOpened,
            !open && classes.innerListClosed
          )}
        >
          {items.map(({ name, icon, link }, index) => (
            <ButtonBase key={index} className={classes.innerBtn}>
              <ListItem
                className={classes.link}
                component={"li"}
                onClick={handleClickItem(link)}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </ButtonBase>
          ))}
        </List>
      )}
    </>
  );
};
// <Accordion>
//   <AccordionSummary expandIcon={<ArrowDownIcon />} sx={{ border: "none" }}>
//     <ListItem component={"li"}>
//       <ListItemIcon>{icon}</ListItemIcon>
//       <ListItemText primary={name} />
//     </ListItem>
//   </AccordionSummary>
//
//   {items && items.length > 0 && (
//     <AccordionDetails>
//       <List>
//         {items.map(({ name, icon, link }, index) => (
//           <ListItem
//             component={"li"}
//             key={index}
//             onClick={() => toggleFunc(false)}
//           >
//             <Link to={link ?? ""} className={classes.link}>
//               <ListItemIcon>{icon}</ListItemIcon>
//               <ListItemText primary={name} />
//             </Link>
//           </ListItem>
//         ))}
//       </List>
//     </AccordionDetails>
//   )}
// </Accordion>

export default AccordionListItem;
