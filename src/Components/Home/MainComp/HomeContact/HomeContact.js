import React, { useState } from "react";
import "./HomeContact.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { HomeFormSchema } from "./HomeContactSchema";
import { toast } from "react-toastify";
import Loading from "../../../../Loading/Loading";
import axios from "axios";
import { useFormik } from "formik";
const initialValues = {
  cName: "",
  cBusiness: "",
  cEmail: "",
  cPhone: "",
};

function HomeContact() {
  const [loading, setLoading] = useState(false);
  const [phoneInput, setPhoneInput] = useState("");
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: HomeFormSchema,
    onSubmit: (values, action) => {
      setLoading(true);
      axios
        .post("http://localhost:5000/home-contact", values)
        .then((res) => {
          toast.success("Your message has been successfully sent!");
          setLoading(false);
          action.resetForm();
          setPhoneInput("");
        })
        .catch((err) => {
          console.log("Error", err.message);
          setLoading(false);
          toast.error("Something wrent wrong, please try again!");
        });
    },
  });
  const handlePhone = (e) => {
    setPhoneInput(e);
    console.log("Phone", phoneInput);
    setFieldValue("cPhone", phoneInput);
  };
  return (
    <>
      <div id="homeContact">
        <h2>
          Do You Want An Identity that Stays in Your Customer’s Mind Forever?
        </h2>
        <p>Hire Our Web Developers allover the world!</p>
        <div className="contactDetail">
          <input
            type="text"
            placeholder="Enter Your Name"
            name="cName"
            value={values.cName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.cName && touched.cName ? (
            <p className="form-error">{errors.cName}</p>
          ) : null}
          <input
            type="text"
            placeholder="Enter Your Business Name"
            name="cBusiness"
            value={values.cBusiness}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.cBusiness && touched.cBusiness ? (
            <p className="form-error">{errors.cBusiness}</p>
          ) : null}
          <input
            type="text"
            placeholder="Enter Your Email"
            name="cEmail"
            value={values.cEmail}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.cEmail && touched.cEmail ? (
            <p className="form-error">{errors.cEmail}</p>
          ) : null}
          <PhoneInput
            inputClass="ccc"
            value={phoneInput}
            onChange={handlePhone}
          />
          <button type="submit" onClick={handleSubmit}>
            {loading ? <Loading /> : <>Submit</>}
          </button>
        </div>
        <button className="discount">Chat With Us to Get 30% Discount</button>
      </div>
    </>
  );
}

export default HomeContact;
