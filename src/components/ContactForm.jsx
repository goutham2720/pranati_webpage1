import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";

function ContactForm() {
  return (
    <Container>
      <div className="my-5 p-5 shadow rounded">
        <h3 className="text-center my-3">Contact Us</h3>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control type="text" placeholder="aaabbb" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Phone number"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="1234" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingSelect"
          label="Type of enquery "
          className="mb-3"
        >
          <Form.Select>
            <option>Digital services</option>
            <option>Application development</option>
            <option>Support services</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Message"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button variant="primary" className="d-grid gap-2 mx-auto my-3">
          Submit
        </Button>
      </div>
    </Container>
  );
}

export default ContactForm;
