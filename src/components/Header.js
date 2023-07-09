import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  background: "gray",
};

const Header = () => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Logo style={{ maxWidth: "20rem", maxHeight: "3rem" }} />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link
            href="https://www.linkedin.com/in/madina-dzhetegenova-42298668/"
            target="_blank"
          >
            LinkIn
          </Nav.Link>

          <Nav.Link
            href="https://docs.google.com/document/d/1T6JNqwwVGMr_RX-INmRaCEOcOnVxrdk2oZ9Q0fpqFB4/edit?usp=sharing"
            target="_blank"
          >
            Resume
          </Nav.Link>
          <Nav.Link
            href="https://madina-j.github.io/react-todo/"
            target="_blank"
          >
            My Project
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
