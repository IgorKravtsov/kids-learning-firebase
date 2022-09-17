import * as yup from "yup";

export const useLoginValidation = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Це не є правильною поштою")
      .required("Це поле має бути заповнено"),
    password: yup
      .string()
      .min(6, "Мінімальне кол-во символів - 6")
      .required("Це поле має бути заповнено"),
  });

  return { validationSchema };
};
