import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">My Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
