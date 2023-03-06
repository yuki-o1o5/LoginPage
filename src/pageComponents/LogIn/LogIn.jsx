import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import "./LogIn.css";

function LogIn() {
  const initialValues = { username: "", mailAddress: "", passWord: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

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
    const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
    const matchedUser = storedUsers.find(
      (user) =>
        user.mailAddress === formValues.mailAddress &&
        user.passWord === formValues.passWord
    );
    if (matchedUser) {
      console.log("Sucess");
      localStorage.setItem("currentUser", formValues.username)
      navigate("/start");
    } else {
      console.log("failed");
      setFormErrors({ login: "Incorrect email address or password" });
      console.log(formErrors);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      errors.username = "Use name is required.";
    }
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
        <div className="accountLink">
          <p className="signUpLink">New to This Game? </p>
          <Link to="/account">
            <span className="link-to-login">Create New Account</span>
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
                placeholder="E-mail adress"
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
            Log in
          </Button>
          {formErrors.login && <span>Error: {formErrors.login}</span>}
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="msgOK">
              Sucess!{" "}
              <Link to="/start">
                <span className="link-to-login"> Start Game</span>
              </Link>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default LogIn;
