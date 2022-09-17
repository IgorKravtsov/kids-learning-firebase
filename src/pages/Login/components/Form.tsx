import React, { useState } from "react";
import { useStyles } from "../login.styles";

import { FormProvider, UseFormReturn } from "react-hook-form";

import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormInput from "components/formInput/FormInput";
import { SubmitLoginData } from "../interfaces";

export interface FormProps {
  methods: UseFormReturn<SubmitLoginData>;

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
  const classes = useStyles();

  const [isShowPass, setIsShowPass] = useState(false);

  const { handleSubmit, register } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormInput
          {...register("email")}
          label="Пошта"
          placeholder="Уведіть пошту..."
        />
        <FormInput
          {...register("password")}
          // control={control}
          // errors={errors}
          label="Пароль"
          placeholder="Уведіть пароль..."
          className={classes.password}
          type={!isShowPass ? "password" : "text"}
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
          Увійти
        </LoadingButton>
      </form>
    </FormProvider>
  );
};

export default Form;
