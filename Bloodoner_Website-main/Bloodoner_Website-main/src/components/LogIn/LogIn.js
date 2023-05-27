import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../Firebase";
import "./LogIn.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="container">
      <div className="innerBox-login">
        <h4 className="heading">Login Here</h4>
        <div className="inputcontrol-div">
          <InputControl
            label="Email"
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="Enter email address"
          />
          <InputControl
            label="Password"
            onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
            placeholder="Enter Password"
          />{" "}
        </div>

        <div className="footer-login">
          <b className="error">{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            LOG IN
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/Register">Register Here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
