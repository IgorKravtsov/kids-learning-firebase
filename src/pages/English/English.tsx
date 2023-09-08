import React from "react";
import { Outlet } from "react-router-dom";

import Container from "@mui/material/Container";

const English: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Outlet />
    </Container>
  );
};

export default English;
