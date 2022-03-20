import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import SignOut from "../authentification/SignOut";
import { BsBell } from "react-icons/bs";
import { useSelector } from "react-redux";

import "./Navbar.css";

const TopNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark">
      <Container>
        <Navbar.Brand href="/">
          <h1 style={{ color: "white" }}>Ask it</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link activeClassName="active" exact as={NavLink} to="/">
              <h5 style={{ color: "white" }}>Home</h5>
            </Nav.Link>
            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle mr-2 mt-1"
                type="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Question
              </button>
              <div
                className="dropdown-menu "
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="/question-page">
                  Question Page
                </a>

                <a className="dropdown-item" href="/my-questions">
                  My Questions
                </a>
              </div>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle mt-1 ml-7"
                type="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Registration
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="/signup">
                  Register Page
                </a>
                <a className="dropdown-item" href="/login">
                  Login Page
                </a>
                <a className="dropdown-item" href="/profile-page">
                  Profile page
                </a>
              </div>
            </div>
          </Nav>{" "}
          <Nav.Link
            activeClassName="active"
            exact
            as={NavLink}
            to="/my-questions"
          >
            <BsBell className="notificationBell" />
          </Nav.Link>
          <Nav.Link>
            <SignOut />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
