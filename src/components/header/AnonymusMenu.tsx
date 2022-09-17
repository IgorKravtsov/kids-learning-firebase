import React from "react";
import { useStyles } from "./header.styles";
import { useLocation, useNavigate } from "react-router-dom";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { RouteName } from "routes";

const AnonymusMenu: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ToggleButtonGroup
      className={classes.registerLoginSection}
      value={location.pathname}
      exclusive
    >
      <ToggleButton
        onClick={() => navigate(RouteName.LOGIN)}
        value={RouteName.LOGIN}
      >
        Увійти
      </ToggleButton>
      <ToggleButton
        onClick={() => navigate(RouteName.REGISTER)}
        value={RouteName.REGISTER}
      >
        Зареєструватися
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default AnonymusMenu;
