import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { onSignUp } from "../api/auth";
import Footer from "../layout/Footer";
import "./SignUp.css";

export default function SignUp() {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await onSignUp(values);

      setError("");
      setSuccess(data.message);
      setValues({ email: "", password: "", firstName: "", lastName: "" });
      navigate("/");
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  return (
    <>
      <Card className="signup">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form id="signup-form" onSubmit={e => onSubmit(e)}>
            <Form.Group id="first-name">
              <Form.Control
                type="text"
                name="firstName"
                className="inner-text"
                placeholder="First Name"
                required
                value={values.firstName}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group id="last-name">
              <Form.Control
                type="text"
                name="lastName"
                className="inner-text"
                placeholder="Last Name"
                required
                value={values.lastName}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Control
                type="email"
                name="email"
                className="inner-text"
                placeholder="Email"
                required
                value={values.email}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control
                type="password"
                className="inner-text"
                placeholder="Password"
                name="password"
                required
                value={values.password}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
            <div style={{ color: "green", margin: "10px 0" }}>{success}</div>
            <Button type="submit" className="signup-btn">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="signup-link">
        Already have an account?
        <Link to="/login" className="login-link">
          Log In
        </Link>
      </div>
      <Footer />
    </>
  );
}
