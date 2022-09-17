import React, { useEffect, useMemo } from "react";

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { MenuItem, subjects } from "menuItems";
import { RouteName, FormRoutes } from "routes";

enum SchoolbookPageTabs {
  SECOND_FORM = 0,
  FOURTH_FORM = 1,
}

const Schoolbooks: React.FC = (): React.ReactElement => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTabValue = (locationPathname: string) => {
    if (locationPathname.endsWith(FormRoutes.SECOND)) {
      return SchoolbookPageTabs.SECOND_FORM;
    } else if (locationPathname.endsWith(FormRoutes.FOURTH)) {
      return SchoolbookPageTabs.FOURTH_FORM;
    } else navigate(FormRoutes.SECOND);
    return SchoolbookPageTabs.SECOND_FORM;
  };

  const [value, setValue] = React.useState(getTabValue(location.pathname));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(getTabValue(location.pathname));
  }, [location]);

  const booksMenuItems = useMemo(
    () =>
      subjects.find((subject) => subject.link === RouteName.SCHOOL_BOOKS)
        ?.items,
    [subjects]
  );

  return (
    <Container>
      <Tabs value={value} onChange={handleChange} aria-label="books menu">
        {booksMenuItems &&
          booksMenuItems.map(({ name, icon, id, link }: MenuItem) => (
            <Tab key={id} label={name} component={Link} to={link} icon={icon} />
          ))}
      </Tabs>

      <Outlet />
    </Container>
  );
};

export default Schoolbooks;
