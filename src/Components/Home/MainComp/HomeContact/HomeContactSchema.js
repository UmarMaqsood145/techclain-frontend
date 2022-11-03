import * as Yup from "yup";

export const HomeFormSchema = Yup.object({
  cName: Yup.string().required("Please enter your name"),
  cBusiness: Yup.string().required("Please enter your business name"),
  cEmail: Yup.string().email().required("Please enter your email"),
  cPhone: Yup.string().required("Please enter your phone number"),
});
