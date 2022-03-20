import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { onSignIn } from "../api/auth";
import { useDispatch } from "react-redux";
import "./SignIn.css";
import { authenticateUser } from "../redux/slices/AuthSlice";
import Footer from "../layout/Footer";

const SignIn = () => {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const onSubmit = async e => {
    e.preventDefault();

    try {
      await onSignIn(values);
      dispatch(authenticateUser());

      localStorage.setItem("isAuth", "true");
      navigate("/");
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <div>
      <Card className="login">
        <Card.Body>
          <h2 className="login-body">Log In</h2>
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Group className="email-box">
              <Form.Control
                id="email"
                type="email"
                className="inner-text"
                placeholder="Please enter your email"
                required
                name="email"
                value={values.email}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control
                type="password"
                className="inner-text"
                placeholder="Please enter your password"
                name="password"
                required
                value={values.password}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <div style={{ color: "red", margin: "10px 0" }}>{error}</div>

            <Button className="login-btn" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="login-link">
        <Link to="/forgot-password" className="forgotpwbtn">
          Forgot password?
        </Link>
        <Link to="/signup" className="signupbtn">
          Sign Up
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
