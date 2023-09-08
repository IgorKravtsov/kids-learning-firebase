import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import {
  adminAdditionalMenuItems,
  loggedInMenuItems,
  unLoggedUserMenuList,
} from "menuItems";
import { useAuth } from "hooks/useAuth";

import DrawerListItem from "./DrawerListItem";

export interface DrownerListProps {
  toggleFunc?: (
    isOpen: boolean,
    e?: React.KeyboardEvent | React.MouseEvent
  ) => void;
  className?: string;
  width?: number;
}

const DrawerList: React.FC<DrownerListProps> = ({
  toggleFunc,
  className,
  width = 200,
}): React.ReactElement => {
  const { isAuth, isAdmin } = useAuth();

  return (
    <Box sx={{ width }} role="presentation" className={className}>
      <List>
        {isAuth
          ? loggedInMenuItems.map((item, index) => (
              <DrawerListItem key={index} toggleFunc={toggleFunc} item={item} />
            ))
          : unLoggedUserMenuList.map((item, index) => (
              <DrawerListItem key={index} toggleFunc={toggleFunc} item={item} />
            ))}
        {isAdmin && (
          <>
            <Divider />
            {adminAdditionalMenuItems.map((item, index) => (
              <DrawerListItem key={index} toggleFunc={toggleFunc} item={item} />
            ))}
          </>
        )}
      </List>
    </Box>
  );
};

export default DrawerList;
