import * as yup from "yup";

export const useRegisterValidation = () => {
  const validationSchema = yup.object({
    name: yup.string().required("Обов'язково"),
    lastName: yup.string().required("Обов'язково"),
    email: yup
      .string()
      .email("Це не є правильною поштою")
      .required("Це поле має бути заповнено"),
    password: yup
      .string()
      .min(6, "Мінімальне кол-во символів - 6")
      .required("Це поле має бути заповнено"),
    confirmPass: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Це поле має співпадати з полем паролю"
      )
      .required("Це поле є обов`язковим"),
    form: yup
      .number()
      .typeError("Це поле має бути заповнено")
      .min(1, "Мінімальне значення - 1")
      .max(12, "Максимальне значення - 12")
      .required("Це поле має бути заповнено"),
  });

  return { validationSchema };
};
