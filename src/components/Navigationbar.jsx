import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg" className="navigationbar">
      <Container fluid>
        <Navbar.Brand className="navigationbar-brandlogo" href="#">
          <Image src="https://pranati.co.in/wp-content/uploads/2018/10/Pranati-Technologies-Logo_03.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="navigationbar-link">
            <Nav.Link as={Link} to="/" className="text-dark fs-5 px-3 ">Home</Nav.Link>
            <Nav.Link as={Link} to="/About" className="text-dark fs-5 px-3">About Us</Nav.Link>
            <Nav.Link as={Link} to="/Service" className="text-dark fs-5 px-3">Services</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="text-dark fs-5 px-3">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
