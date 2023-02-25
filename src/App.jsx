import { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const initialValues = { username: "", mailAddress: "", passWord: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.name);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      errors.username = "Can you write user name?";
    }
    if (!values.mailAddress) {
      errors.mailAddress = "Can you write e-mail adress?";
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "Please write collect e-mail adress";
    }
    if (!values.passWord) {
      errors.passWord = "Can you write password?";
    } else if (values.passWord.length < 4) {
      errors.passWord =
        "Can you write more than 4 letters & less than 15 letters?";
    } else if (values.passWord.length > 15) {
      errors.passWord =
        "Can you write more than 4 letters & less than 15 letters?";
    }

    return errors;
  };

  return (
    <div className="formCotainer">
      <form onSubmit={(event) => handleSubmit(event)}>
        <h1>Log in</h1>
        <hr />
        <div className="uiForm">
          <div className="formFeild">
            <label>User Name</label>
            <input
              type="text"
              placeholder="user name"
              name="username"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <p className="errorMsg">{formErrors.username}</p>

          <div className="formFeild">
            <label>E-mail adress</label>
            <input
              type="text"
              placeholder="e-mail adress"
              name="mailAddress"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <p className="errorMsg">{formErrors.mailAddress}</p>

          <div className="formFeild">
            <label>Password</label>
            <input
              type="text"
              placeholder="password"
              name="passWord"
              onChange={(event) => handleChange(event)}
            />
          </div>

          <p className="errorMsg">{formErrors.passWord}</p>
          <Button
            variant="contained"
            className="submitButton"
            sx={{ mt: 5, p: 1 }}
            type="submit"
            currsol="point"
          >
            Log in
          </Button>
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="msgOK">Sucess!</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
