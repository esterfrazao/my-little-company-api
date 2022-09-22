import * as yup from "yup";

export const createContactSchema = yup.object().shape({
  name: yup.string().required("name is a required field"),
  email: yup.string().email("Invalid Email"),
  phone_number: yup
    .string()
    .max(15, "number must not have more than 15 characters"),
});

export const updatePatchContactSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Invalid Email"),
  phone_number: yup
    .string()
    .max(15, "number must not have more than 15 characters"),
});

export const updatePutContactSchema = yup.object().shape({
  name: yup.string().required("name is a required field"),
  email: yup
    .string()
    .email("Invalid Email")
    .required("email is a required field"),
  phone_number: yup
    .string()
    .max(15, "number must not have more than 15 characters")
    .required("phone_number is a required field"),
});
