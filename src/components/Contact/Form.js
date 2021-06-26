import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./Form.css";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { useState } from "react";

function Form() {
  const { count } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhoneNumber: "",
    userQuery: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-input-area">
          <div className="input">
            <p className={`theme-${count}-color`}>Your Name</p>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <p className={`theme-${count}-color`}>Your Email</p>
            <input
              type="text"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <p className={`theme-${count}-color`}>Your Phone No</p>
            <input
              type="text"
              name="userPhoneNumber"
              value={formData.userPhoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <p className={`theme-${count}-color`}>Your Query</p>
            <textarea
              name="userQuery"
              value={formData.userQuery}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-submit">
          <button className={`formButton theme-${count}-background`}>
            <KeyboardReturnIcon />
            <br />
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
