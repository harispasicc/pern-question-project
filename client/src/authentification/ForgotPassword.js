import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { onForgotPassword } from "../api/auth";
import Footer from "../layout/Footer";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  // let navigate = useNavigate();

  // const [values, setValues] = useState({
  //   email: "",
  // });
  // const [error, setError] = useState(false);

  // const onChange = e => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const dispatch = useDispatch();
  // const onSubmit = async e => {
  //   e.preventDefault();

  //   try {
  //     await onForgotPassword(values);
  //     dispatch(authenticateUser());

  //     localStorage.setItem("isAuth", "true");
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.response.data.errors[0].msg);
  //     setError(error.response.data.errors[0].msg);
  //   }
  // };
  // let navigate = useNavigate();

  // navigate("/login");

  return (
    <>
      <Card className="forgot-password">
        <Card.Body>
          <h2 className="forgot-password-body">Password Reset</h2>
          <Form>
            <Form.Group id="email">
              <Form.Control
                type="email"
                name="email"
                className="inner-text"
                placeholder="Email"
                required
              />
            </Form.Group>
            <div className="resetpw-btns">
              <Button className="reset-btn" type="submit">
                Submit
              </Button>
            </div>

            <Link to="/login" className="login-link">
              Log In
            </Link>
          </Form>
        </Card.Body>
      </Card>
      <div>
        Need an account?{" "}
        <Link className="forgotpw-signup-link" to="/signup">
          Sign Up
        </Link>
      </div>
      <Footer />
    </>
  );
}
