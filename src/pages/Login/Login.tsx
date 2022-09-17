import React, { useState } from "react";
import { useStyles } from "./login.styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { RouteName } from "routes";

import { login } from "storage/slices/userSlice";
import { useAppDispatch } from "storage/hooks/typedHooks";
import { error } from "storage/slices/snackbarSlice";

import Form from "./components/Form";

import { useLoginValidation } from "./useLoginValidation";
import { SubmitLoginData } from "./interfaces";

const Login: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const { validationSchema } = useLoginValidation();

  const methods = useForm<SubmitLoginData>({
    resolver: yupResolver(validationSchema),
  });

  const onError = (e: any) => {
    console.log("===ERROR===", e);
  };

  const onSubmit = async (data: SubmitLoginData) => {
    const { email, password } = data;

    setIsLoading(true);
    const response = (await dispatch(login({ email, password }))) as any;
    setIsLoading(false);

    if (response?.meta.requestStatus !== "rejected") {
      navigate(RouteName.HOME);
    } else {
      dispatch(
        error({
          message: response?.error?.message ?? "Помилка серверу",
        })
      );
    }
  };

  return (
    <Paper elevation={10} className={classes.paper}>
      <Grid container alignItems="center" direction="column">
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" className={classes.title}>
          Вхід
        </Typography>
      </Grid>

      <Form
        isLoading={isLoading}
        methods={methods}
        onSubmit={onSubmit}
        onError={onError}
      />
    </Paper>
  );
};

export default Login;
