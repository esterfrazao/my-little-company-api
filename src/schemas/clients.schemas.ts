import * as yup from "yup";

export const createClientSchema = yup.object().shape({
  email: yup
    .string()
    .required("email is a required field")
    .email("Invalid Email"),
  password: yup
    .string()
    .required("password is a required field")
    .min(8, "Password must have minimum of 8 characters"),
  name: yup.string().required("name is a required field"),
  phone_number: yup
    .string()
    .required("phone_number is a required Field")
    .max(15, "number must not have more than 15 characters"),
});

export const updateClientSchema = yup.object().shape({
  email: yup.string().email("Invalid Email"),
  password: yup.string().min(8, "Password must have minimum of 8 characters"),
  name: yup.string(),
  phone_number: yup
    .string()
    .max(15, "number must not have more than 15 characters"),
});
