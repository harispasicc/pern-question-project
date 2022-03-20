import React, { useState, useEffect } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import "./ProfilePage.css";

export default function ProfilePage() {
  return (
    <>
      <Card className="update-profile">
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          <Form id="update-profile-form">
            <Form.Group id="first-name">
              <Form.Control
                type="text"
                name="firstName"
                className="inner-text"
                placeholder="First Name"
                required
              />
            </Form.Group>
            <Form.Group id="last-name">
              <Form.Control
                type="text"
                name="lastName"
                className="inner-text"
                placeholder="Last Name"
                required
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Control
                type="email"
                className="inner-text"
                placeholder="Email"
                name="email"
                required
              />
            </Form.Group>
            <Button type="submit" className="update-btn">
              Update
            </Button>
          </Form>
        </Card.Body>
        <Card.Body>
          <h2 className="text-center  mb-4">Profile Details</h2>
          <Form id="update-profile-form">
            <Form.Group id="first-name">
              <Form.Control
                type="text"
                name="firstName"
                className="inner-text"
                placeholder="First Name"
                required
              />
            </Form.Group>
            <Form.Group id="last-name">
              <Form.Control
                type="text"
                name="lastName"
                className="inner-text"
                placeholder="Last Name"
                required
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Control
                type="email"
                className="inner-text"
                placeholder="Email"
                name="email"
                required
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <div className="update-link">
        <Link to="/forgot-password" className="forgotpwbtn">
          Change password?
        </Link>
        <Link to="/" className="cancel-link">
          Cancel
        </Link>
      </div>
      <Footer />
    </>
  );
}
