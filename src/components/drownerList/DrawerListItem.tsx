import React from "react";

import AccordionListItem from "./AccordionListItem";
import SimpleListItem from "./SimpleListItem";

import { MenuItem } from "menuItems";

export interface DrawerListItemProps {
  item: MenuItem;
  toggleFunc: (
    isOpen: boolean,
    e?: React.KeyboardEvent | React.MouseEvent
  ) => void;
}

const DrawerListItem: React.FC<DrawerListItemProps> = ({ item, toggleFunc }): React.ReactElement => {
  const { items } = item

  return (
    <>
      {items && items?.length > 0 ? (
        <AccordionListItem item={item} toggleFunc={toggleFunc} />
      ) : (
        <SimpleListItem item={item} toggleFunc={toggleFunc} />
      )}
    </>
  )
}

export default DrawerListItem
