import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <a
            className={
              location.pathname === "/home" ? "color-success" : "color-warning"
            }
          >
            Home
          </a>
        </Link>

        <Link to="/services">
          <a
            className={
              location.pathname === "/services"
                ? "color-success"
                : "color-warning"
            }
          >
            Services
          </a>
        </Link>

        <Link to="/about">
          <a
            className={
              location.pathname === "/about" ? "color-success" : "color-warning"
            }
          >
            About Me
          </a>
        </Link>

        <Link to="/skills">
          <a
            className={
              location.pathname === "/skills"
                ? "color-success"
                : "color-warning"
            }
          >
            Skills
          </a>
        </Link>

        <Link to="/contacts">
          <a
            className={
              location.pathname === "/contacts"
                ? "color-success"
                : "color-warning"
            }
          >
            Contacts
          </a>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
