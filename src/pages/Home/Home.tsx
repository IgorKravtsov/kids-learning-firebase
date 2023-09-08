import React from "react";
import styles from "./home.module.scss";
import Typography from "@mui/material/Typography";
import { useAuth } from "hooks/useAuth";
import { Container } from "@mui/material";

const Home: React.FC = (): React.ReactElement => {
  const { isAuth } = useAuth();

  return (
    <Container maxWidth="md">
      <Typography
        className={styles.text}
        variant="h3"
        sx={{ paddingTop: "50px" }}
      >
        {isAuth
          ? "Оберіть ваш навчальний предмет у меню зліва"
          : "Спочатку треба зареєструватися або увійти в свій акаунт!"}
      </Typography>
    </Container>
  );
};

export default Home;
