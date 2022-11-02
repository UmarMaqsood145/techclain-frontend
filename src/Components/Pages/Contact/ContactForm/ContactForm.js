import React from "react";
import "./ContactForm.css";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { ContactFormSchema } from "./ContactFormSchema";
import { toast } from "react-toastify";
import Loading from "../../../../Loading/Loading";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const initialValues = {
  name: "",
  email: "",
  message: "",
};
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
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
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <Form.Label>Name:</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  aria-describedby="inputGroupPrepend"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  isValid={touched.name && !errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <Form.Label>Email:</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  isValid={touched.email && !errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <Form.Label>Message:</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Message"
                  aria-describedby="inputGroupPrepend"
                  name="message"
                  as="textarea"
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                  isValid={touched.message && !errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Button type="submit">
              {loading ? <Loading /> : <>Send Message</>}
            </Button>
          </Form>
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
