import React, { useState } from "react";
import "./ContactForm.css";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { ContactFormSchema } from "./ContactFormSchema";
import { toast } from "react-toastify";
import Loading from "../../../../Loading/Loading";
import axios from "axios";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Aos from "aos";
const initialValues = {
  name: "",
  email: "",
  message: "",
};
function ContactForm() {
  Aos.init();
  Aos.refresh();
  const [loading, setLoading] = useState(false);
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: ContactFormSchema,
    onSubmit: (values, action) => {
      setLoading(true);
      axios
        .post("https://techclain-backend.vercel.app/contact-us", values)
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
        <div className="left-box" data-aos="fade-right">
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
        <div className="right-box" data-aos="fade-left">
          <div>
            <h3>CONTACT DETAILS</h3>
            <p>
              We are working in all over of world. We provide web development
              and web development services. We have an expert team who makes
              your business easy to get anywhere in the era of the E-commerce
              industry.We also provides e-commerce website development services
              for an online shopping store. If you want to develop a
              well-designed and attractive website for your online business,
              contact us to get our exceptional web development services.
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
                <a href="tel: +923033230379" target="_blank" rel="noreferrer">
                  +923033230379
                </a>
              </li>
              <li>
                <FaWhatsapp className="icon" />
                <a
                  href="https://wa.me/923033230379"
                  target="_blank"
                  rel="noreferrer"
                >
                  +923033230379
                </a>
              </li>
              <li>
                <MdEmail className="icon" />
                <a
                  href="mailTo: techclain145@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  techclain145@gmail.com
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
