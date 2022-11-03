import React, { useState } from "react";
import "./OrderNow.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Button from "react-bootstrap/Button";
import { OrderFormSchema } from "./OrderNowSchema";
import { toast } from "react-toastify";
import Loading from "../../../Loading/Loading";
import axios from "axios";
import { useFormik } from "formik";
const initialValues = {
  orderName: "",
  orderEmail: "",
  orderPhone: "",
  orderCompany: "",
  orderCountry: "",
  orderPackage: "",
  orderWebUrl: "",
  orderBudget: "",
  orderDetails: "",
};

function OrderNow() {
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
    validationSchema: OrderFormSchema,
    onSubmit: (values, action) => {
      setLoading(true);
      axios
        .post("http://localhost:5000/order-now", values)
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
    setFieldValue("orderPhone", phoneInput);
  };

  return (
    <div id="orderNow">
      <h1>
        Order <span>Now</span>
      </h1>
      <p className="text-center">
        We are glad that you are here. You are invited to share your project
        details.
      </p>
      <Form className="inputsBox" onSubmit={handleSubmit}>
        <div className="inputField">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="same"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              name="orderName"
              value={values.orderName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.orderName && touched.orderName ? (
              <p className="form-error">{errors.orderName}</p>
            ) : null}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="same"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="orderEmail"
              value={values.orderEmail}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.orderEmail && touched.orderEmail ? (
              <p className="form-error">{errors.orderEmail}</p>
            ) : null}
          </FloatingLabel>
        </div>
        <div className="inputField">
          <div>
            <PhoneInput
              inputClass="cc"
              className="same"
              value={phoneInput}
              onChange={handlePhone}
            />
          </div>
          <FloatingLabel
            controlId="floatingInput"
            label="Company Name"
            className="same"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              name="orderCompany"
              value={values.orderCompany}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.orderCompany && touched.orderCompany ? (
              <p className="form-error">{errors.orderCompany}</p>
            ) : null}
          </FloatingLabel>
        </div>
        <div className="inputField">
          <FloatingLabel
            controlId="floatingSelect"
            label="Select Country"
            className="same"
          >
            <Form.Select
              aria-label="Floating label select example"
              name="orderCountry"
              value={values.orderCountry}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Open this to select country</option>
              <option value="AF">Afghanistan</option>
              <option value="AX">Aland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">
                Congo, Democratic Republic of the Congo
              </option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="CI">Cote D'Ivoire</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CW">Curacao</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and Mcdonald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran, Islamic Republic of</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Democratic People's Republic of</option>
              <option value="KR">Korea, Republic of</option>
              <option value="XK">Kosovo</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libyan Arab Jamahiriya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MK">
                Macedonia, the Former Yugoslav Republic of
              </option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia, Federated States of</option>
              <option value="MD">Moldova, Republic of</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="AN">Netherlands Antilles</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territory, Occupied</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RE">Reunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="BL">Saint Barthelemy</option>
              <option value="SH">Saint Helena</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="CS">Serbia and Montenegro</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SX">Sint Maarten</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">
                South Georgia and the South Sandwich Islands
              </option>
              <option value="SS">South Sudan</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan, Province of China</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands, British</option>
              <option value="VI">Virgin Islands, U.s.</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </Form.Select>
            {errors.orderCountry && touched.orderCountry ? (
              <p className="form-error">{errors.orderCountry}</p>
            ) : null}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSelect"
            label="Select Package"
            className="same"
          >
            <Form.Select
              aria-label="Floating label select example"
              name="orderPackage"
              value={values.orderPackage}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Open this to select package</option>
              <option value="Website Basic Package ($40)">
                Website Basic Package ($40)
              </option>
              <option value="Website Basic Package ($40)">
                Website Basic Package ($30)
              </option>
              <option value="Website Basic Package ($40)">
                Website Basic Package ($25)
              </option>
              <option value="Website Basic Package ($40)">
                Website Basic Package ($20)
              </option>
              <option value="Website Basic Package ($40)">
                Website Basic Package ($15)
              </option>
              <option value="Website Basic Package ($40)">
                Website Basic Package ($10)
              </option>
              <option value="Website Basic Package ($40)">
                Amazon Dropshipping Package ($05)
              </option>
              <option value="Website Basic Package ($40)">
                Amazon VA Package ($200)
              </option>
            </Form.Select>
            {errors.orderPackage && touched.orderPackage ? (
              <p className="form-error">{errors.orderPackage}</p>
            ) : null}
          </FloatingLabel>
        </div>
        <div className="inputField">
          <FloatingLabel
            controlId="floatingInput"
            label="Existing Website URL(optional):"
            className="same"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              name="orderWebUrl"
              value={values.orderWebUrl}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.orderWebUrl && touched.orderWebUrl ? (
              <p className="form-error">{errors.orderWebUrl}</p>
            ) : null}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Your budget in $"
            className="same"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              name="orderBudget"
              value={values.orderBudget}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.orderBudget && touched.orderBudget ? (
              <p className="form-error">{errors.orderBudget}</p>
            ) : null}
          </FloatingLabel>
        </div>
        <div className="inputField">
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Your Project Details"
            className="same"
          >
            <Form.Control
              as="textarea"
              placeholder="Your Project Details"
              name="orderDetails"
              value={values.orderDetails}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.orderDetails && touched.orderDetails ? (
              <p className="form-error">{errors.orderDetails}</p>
            ) : null}
          </FloatingLabel>
        </div>
        <Button type="submit" className="submitBtn">
          {loading ? <Loading /> : <>Submit</>}
        </Button>
      </Form>
    </div>
  );
}

export default OrderNow;
