import * as yup from "yup";

export const createSessionSchema = yup.object().shape({
  email: yup
    .string()
    .required("email is a required field")
    .email("Invalid Email"),
  password: yup
    .string()
    .required("password is a required field")
    .min(8, "Password must have minimum of 8 characters"),
});
