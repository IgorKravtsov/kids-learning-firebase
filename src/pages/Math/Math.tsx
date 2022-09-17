import React, { useEffect, useMemo } from "react";
import styles from "./math.module.scss";

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { MenuItem, subjects } from "menuItems";
import { MathRoutes } from "routes";

enum MathPageTabs {
  BOOKS = 0,
  SUMS = 1,
}

const Math: React.FC = (): React.ReactElement => {
  const location = useLocation()
  const navigate = useNavigate()

  const getTabValue = (locationPathname: string) => {
    if (locationPathname.endsWith(MathRoutes.BOOKS)) {
      return MathPageTabs.BOOKS
    } else if (locationPathname.endsWith(MathRoutes.SUMS)) {
      return MathPageTabs.SUMS
    } else {
      navigate(MathRoutes.BOOKS)
      return MathPageTabs.BOOKS
    }
  }

  const mathMenuItems = useMemo(() => subjects.find((subject: MenuItem) => subject.name === 'Математика')?.items, [subjects])

  const [value, setValue] = React.useState(getTabValue(location.pathname))

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    setValue(getTabValue(location.pathname))
  }, [location])

  return (
    <Container>
      <Tabs value={value} onChange={handleChange} aria-label='math menu' className={styles.tabs}>
        {mathMenuItems &&
          mathMenuItems.map(({ name, icon, id, link }: MenuItem) => <Tab key={id} label={name} component={Link} to={link} icon={icon} />)}
      </Tabs>

      <Outlet />
    </Container>
  )
}

export default Math
