import React from "react";
import styles from "./math.module.scss";

import { Outlet } from "react-router-dom";

import Container from "@mui/material/Container";

const Math: React.FC = (): React.ReactElement => {
  return (
    <Container className={styles.wrapper} maxWidth="md">
      <Outlet />
    </Container>
  );
};

export default Math;
