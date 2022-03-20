import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { unauthenticateUser } from "../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";
import { onSignOut } from "../api/auth";
import "./SignOut.css";

export default function SignOut() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const signout = async () => {
    try {
      await onSignOut();
      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
      navigate("/login");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Container className="signout">
        <div className="update-signout-btn">
          <Button
            type="button"
            className="signout-btn"
            onClick={() => signout()}
          >
            Sign Out
          </Button>
        </div>
      </Container>
    </>
  );
}
