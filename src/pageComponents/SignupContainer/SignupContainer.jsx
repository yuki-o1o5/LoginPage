import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import "./SignupContainer.css";

function SignupContainer() {
  const initialUser = { username: "", mailAddress: "", passWord: "" };
  const [formValues, setFormValues] = useState(initialUser);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.toLowerCase() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const existingData = JSON.parse(localStorage.getItem("userData")) || [];
      const newData = {
        username: formValues.username,
        mailAddress: formValues.mailAddress,
        passWord: formValues.passWord,
        score: 0,
      };
      localStorage.setItem(
        "userData",
        JSON.stringify([...existingData, newData])
      );
      setTimeout(() => {
        navigate("/");
      }, 1500);

      setIsSubmit(true);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      errors.username = "User name is required.";
    }
    if (!values.mailAddress) {
      errors.mailAddress = "E-mail address is required.";
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
        <h1>Sign Up</h1>
        <div className="accountLink">
          <p className="SignupContainerLink">Already have an account? </p>
          <Link to="/">
            <span className="link-to-login">Log in</span>
          </Link>
        </div>
        <hr />
        <div className="uiForm">
          <div className="formFeildControler">
            <div className="formFeild">
              {/* <label>User Name</label> */}
              <input
                type="text"
                placeholder="User name"
                name="username"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <p className="errorMsg">{formErrors.username}</p>
          </div>
          <div className="formFeildControler">
            <div className="formFeild">
              {/* <label>E-mail adress</label> */}
              <input
                type="text"
                placeholder="E-mail address"
                name="mailAddress"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <p className="errorMsg">{formErrors.mailAddress}</p>
          </div>
          <div className="formFeildControler">
            <div className="formFeild">
              {/* <label>Password</label> */}
              <input
                type="text"
                placeholder="Password"
                name="passWord"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <p className="errorMsg">{formErrors.passWord}</p>
          </div>

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
            Sign up
          </Button>
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="msgOK">Sucess!</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignupContainer;
