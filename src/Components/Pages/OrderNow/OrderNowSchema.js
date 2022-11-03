import * as Yup from "yup";

export const OrderFormSchema = Yup.object({
  orderName: Yup.string().required("Please enter your name"),
  orderEmail: Yup.string().email().required("Please enter your email"),
  orderPhone: Yup.string().required("Please enter your phone number"),
  orderCompany: Yup.string().required("Please enter your company name"),
  orderCountry: Yup.string().required("Please select your country"),
  orderPackage: Yup.string().required("Please select your package"),
  orderWebUrl: Yup.string(),
  orderBudget: Yup.string().required("Please enter your budget in $$$"),
  orderDetails: Yup.string().required("Please enter project details"),
});
