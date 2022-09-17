import React, { forwardRef } from "react";

import { Controller, FieldErrors, useFormContext } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export type FormInputProps = TextFieldProps & {
  name: string;
  errors?: FieldErrors<any>;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ name, defaultValue, fullWidth = true, ...props }) => {
    const { control } = useFormContext();
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...props}
            {...field}
            fullWidth={fullWidth}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
    );
  }
);

export default FormInput;
