import React from "react";
import "./ContactForm.css";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Aos from "aos";
import { ContactFormSchema } from "./ContactFormSchema";
import { toast } from "react-toastify";
import Loading from "../../../../Loading/Loading";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
const initialValues = {
  name: "",
  email: "",
  message: "",
};
function ContactForm() {
  Aos.init();
  Aos.refresh();

  const [loading, setLoading] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: ContactFormSchema,
      onSubmit: (values, action) => {
        setLoading(true);
        axios
          .post("", values)
          .then((res) => {
            toast.success("Your message has been successfully sent!");
            setLoading(false);
            action.resetForm();
          })
          .catch((err) => {
            console.log("Error", err.message);
            setLoading(false);
            toast.error("Something wrent wrong, please try again!");
          });
      },
    });
  return (
    <div id="contactForm">
      <h1>
        WRITE US A <span>MESSAGE</span>
      </h1>
      <div className="formContainer">
        <div className="left-box">
          <form>
            <div className="inputField">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
            </div>
            <div className="inputField mt-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
            <div className="inputField mt-2">
              <label htmlFor="message">Message:</label>
              <textarea
                type="text"
                placeholder="Write Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message ? (
                <p className="form-error">{errors.message}</p>
              ) : null}
            </div>
            <button onClick={handleSubmit}>
              {loading ? <Loading /> : <>SEND MESSAGE</>}
            </button>
          </form>
        </div>
        <div className="right-box">
          <div>
            <h3>CONTACT DETAILS</h3>
            <p>
              In this website we are working on providing job if any one has any
              concern regarding job then he can contact us we will find you a
              good way by posting any kind of job in this website or you can
              post your profile here you will find all kinds of jobs.You can
              contact us on the number given below. Our goal is to help you find
              a good job.
            </p>
          </div>
          <div>
            <h3>ADDRESS</h3>
            <div>
              <li>
                <MdLocationOn className="icon" />
                <a
                  href="https://goo.gl/maps/75sS9oLPexo22B9u9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lahore Punjab, Pakistan
                </a>
              </li>
              <li>
                <IoIosCall className="icon" />
                <a href="tel: +923401254367" target="_blank" rel="noreferrer">
                  +923401254367
                </a>
              </li>
              <li>
                <FaWhatsapp className="icon" />
                <a
                  href="https://wa.me/923401254367"
                  target="_blank"
                  rel="noreferrer"
                >
                  +923401254367
                </a>
              </li>
              <li>
                <MdEmail className="icon" />
                <a
                  href="mailTo: jobsviewers@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  jobsviewers@gmail.com
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
