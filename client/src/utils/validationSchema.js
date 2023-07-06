import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("FirstName is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a 10-digit phone number")
    .required("Phone is required"),
  message: Yup.string().required("Message is required"),
});
