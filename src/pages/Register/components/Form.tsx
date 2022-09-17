import React, { useState } from "react";
import { useStyles } from "../register.styles";

import { FormProvider, UseFormReturn } from "react-hook-form";

import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormInput from "components/formInput/FormInput";

import { SubmitRegisterData } from "pages/Register/interfaces";
import Grid from "@mui/material/Grid";

export interface FormProps {
  methods: UseFormReturn<SubmitRegisterData>;

  onSubmit: (data: any) => void;
  onError?: (error: any) => void;

  isLoading?: boolean;
}

const Form: React.FC<FormProps> = ({
  methods,
  onSubmit,
  onError,
  isLoading = false,
}): React.ReactElement => {
  const { handleSubmit, register } = methods;

  const classes = useStyles();
  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Grid container spacing={1} sx={{ mb: 1 }}>
          <Grid item xs={6}>
            <FormInput
              {...register("name")}
              label="Ім'я"
              placeholder="Уведіть ім'я..."
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              {...register("lastName")}
              label="Прізвище"
              placeholder="Уведіть прізвище..."
            />
          </Grid>
        </Grid>
        <FormInput
          {...register("email")}
          label="Пошта"
          placeholder="Уведіть пошту..."
        />
        <FormInput
          {...register("password")}
          label="Пароль"
          placeholder="Уведіть пароль..."
          className={classes.passwordField}
          type={!isShowPass ? "password" : "text"}
        />
        <FormInput
          {...register("confirmPass")}
          label="Повторіть пароль"
          placeholder="Підтвердіть пароль..."
          className={classes.passwordField}
          type={!isShowPass ? "password" : "text"}
        />
        <FormInput
          {...register("form")}
          label="Уведіть Ваш клас"
          className={classes.passwordField}
          type={"number"}
        />

        <FormControlLabel
          control={
            <Checkbox
              value={isShowPass}
              onChange={(e) => setIsShowPass(e.target.checked)}
              color="primary"
            />
          }
          label={"Показати пароль"}
        />

        <LoadingButton
          loading={isLoading}
          loadingPosition="end"
          type="submit"
          color="primary"
          variant="contained"
          className={classes.btn}
          fullWidth
          endIcon={<SendIcon />}
        >
          Зареєструватися
        </LoadingButton>
      </form>
    </FormProvider>
  );
};

export default Form;
