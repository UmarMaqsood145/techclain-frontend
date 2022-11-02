import React from "react";
import "./OrderNow.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Button from "react-bootstrap/Button";

function OrderNow() {
  return (
    <div id="orderNow">
      <h1>
        Order <span>Now</span>
      </h1>
      <p className="text-center">
        We are glad that you are here. You are invited to share your project
        details.
      </p>
      <Form className="inputsBox">
        <div className="inputField">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="same"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="same"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </div>
        <div className="inputField">
          <div>
            <PhoneInput inputClass="cc" className="same" />
          </div>
          <FloatingLabel
            controlId="floatingInput"
            label="Company Name"
            className="same"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>
        </div>
        <div className="inputField">
          <FloatingLabel
            controlId="floatingSelect"
            label="Select Country"
            className="same"
          >
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSelect"
            label="Select Package"
            className="same"
          >
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
        </div>
        <div className="inputField">
          <FloatingLabel
            controlId="floatingInput"
            label="Existing Website URL:"
            className="same"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Your budget in $"
            className="same"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>
        </div>
        <div className="inputField">
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Your Project Details"
            className="same"
          >
            <Form.Control as="textarea" placeholder="Your Project Details" />
          </FloatingLabel>
        </div>
        <Button type="submit" className="submitBtn">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default OrderNow;
