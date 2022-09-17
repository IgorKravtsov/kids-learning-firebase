import React, { useState } from "react";
import { useStyles } from "./register.styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { RouteName } from "routes";

import { useAppDispatch } from "storage/hooks/typedHooks";
import { register } from "storage/slices/userSlice";

import Form from "./components/Form";
import { useRegisterValidation } from "./useRegisterValidation";
import { SubmitRegisterData } from "./interfaces";

const Register: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const { validationSchema } = useRegisterValidation();

  const methods = useForm<SubmitRegisterData>({
    resolver: yupResolver(validationSchema),
  });

  const onError = (e: any) => {
    console.log("===ERROR===", e);
  };

  const onSubmit = async (data: SubmitRegisterData) => {
    const { confirmPass, ...registerData } = data;

    setIsLoading(true);
    const response = await dispatch(register(registerData));
    setIsLoading(false);

    if (response?.meta.requestStatus !== "rejected") {
      navigate(RouteName.HOME);
    }
  };

  return (
    <Grid>
      <Paper elevation={10} className={classes.paper}>
        <Grid container alignItems="center" direction="column">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" className={classes.title}>
            Реєстрація
          </Typography>
        </Grid>
        <Form
          methods={methods}
          onSubmit={onSubmit}
          onError={onError}
          isLoading={isLoading}
        />
      </Paper>
    </Grid>
  );
};

export default Register;
