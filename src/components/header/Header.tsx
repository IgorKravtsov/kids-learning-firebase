import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import DrawerList from "../drownerList/DrawerList";
import { RouteName } from "routes";
import { useAuth } from "hooks/useAuth";
import { Container } from "@mui/material";
import AuthMenu from "components/header/AuthMenu";
import AnonymusMenu from "./AnonymusMenu";

const Header: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuth } = useAuth();

  const [isDrownerVisible, setIsDrownerVisible] = useState(
    location.pathname === RouteName.HOME
  );

  const toggleDrawer = (
    isOpen: boolean,
    e?: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      e &&
      e.type === "keydown" &&
      ((e as React.KeyboardEvent).key === "Tab" ||
        (e as React.KeyboardEvent).key === "Shift")
    )
      return;

    setIsDrownerVisible(isOpen);
  };

  // const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(e.currentTarget)
  // }

  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  // const handleLogout = async () => {
  //   await dispatch(logout())
  // }

  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="h6"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => navigate(RouteName.HOME)}
            >
              Навчання
            </Typography>
            {isAuth ? <AuthMenu /> : <AnonymusMenu />}
          </Toolbar>
        </Container>
      </AppBar>

      <SwipeableDrawer
        open={isDrownerVisible}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <DrawerList toggleFunc={toggleDrawer} />
      </SwipeableDrawer>
    </>
  );
};

export default Header;
