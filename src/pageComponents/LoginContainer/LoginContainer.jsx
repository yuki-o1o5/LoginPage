import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import "./LoginContainer.css";

function LoginContainer() {
  const initialValues = { username: "", mailAddress: "", passWord: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);
    if (Object.keys(errors).length === 0) {
      const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
      const matchedUser = storedUsers.find(
        (user) =>
          user.mailAddress === formValues.mailAddress &&
          user.passWord === formValues.passWord
      );
      if (matchedUser) {
        localStorage.setItem("currentUser", matchedUser.username.toLowerCase());
        navigate("/category");
      } else {
        setFormErrors({ login: "Incorrect email address or password." });
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.mailAddress) {
      errors.mailAddress = "E-mail adress is required.";
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "Please write correct e-mail adress.";
    }
    if (!values.passWord) {
      errors.passWord = "Password is required.";
    } else if (values.passWord.length < 4) {
      errors.passWord = "4 to 15 characters, without spaces.";
    } else if (values.passWord.length > 15) {
      errors.passWord = "4 to 15 characters, without spaces.";
    }

    return errors;
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#39707a",
      },
    },
  });

  return (
    <div className="formCotainer">
      <form className="formControl" onSubmit={(event) => handleSubmit(event)}>
        <h1>Log in</h1>
        <div className="link_container">
          <p className="LoginContainerLink">New to This Quiz? </p>
          <Link to="/signup">
            <span className="link-to-signup">Create New Account</span>
          </Link>
        </div>
        <hr />
        <div className="uiForm">
          <div className="formFeildControler">
            <div className="formFeild">
              <input
                type="text"
                placeholder="E-mail adress"
                name="mailAddress"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <p className="errorMsg">{formErrors.mailAddress}</p>
          </div>
          <div className="formFeildControler">
            <div className="formFeild">
              <input
                type="password"
                placeholder="Password"
                name="passWord"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <p className="errorMsg">{formErrors.passWord}</p>
          </div>
          <div className="buttonContainer">
            <Button
              theme={theme}
              variant="contained"
              className="submitButton"
              sx={{ p: 1.5 }}
              type="submit"
              currsol="point"
              fullWidth
              style={{ borderRadius: 10 }}
            >
              Log in
            </Button>
          </div>
          {formErrors.login && (
            <div className="errorMsgContainer">
              <div className="errorMsg">ERROR: {formErrors.login}</div>
            </div>
          )}
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="msgOK">Sucess!</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginContainer;
