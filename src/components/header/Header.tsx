import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Container } from "@mui/material";

import AuthMenu from "components/header/AuthMenu";
import DrawerList from "../drownerList/DrawerList";
import { RouteName } from "routes";
import { useAuth } from "hooks/useAuth";
import AnonymusMenu from "./AnonymusMenu";
import { useMedia } from "hooks/useMedia";

const Header: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuth } = useAuth();
  const { isDesktop } = useMedia();

  const [isDrawerVisible, setIsDrawerVisible] = useState(
    location.pathname === RouteName.HOME && !isDesktop
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

    setIsDrawerVisible(isOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            {!isDesktop && (
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
            )}

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

      {!isDesktop && (
        <SwipeableDrawer
          open={isDrawerVisible}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          <DrawerList toggleFunc={toggleDrawer} width={250} />
        </SwipeableDrawer>
      )}
    </>
  );
};

export default Header;
