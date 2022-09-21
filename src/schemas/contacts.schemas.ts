import * as yup from "yup";

export const createContactSchema = yup.object().shape({
  name: yup.string().required("name is a required field"),
  email: yup.string().email("Invalid Email"),
  phone_number: yup
    .string()
    .max(15, "number must not have more than 15 characters"),
});
