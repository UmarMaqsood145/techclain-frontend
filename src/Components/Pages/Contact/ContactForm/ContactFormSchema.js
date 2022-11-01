import * as Yup from "yup";

export const ContactFormSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string().required("Please enter your message"),
});
