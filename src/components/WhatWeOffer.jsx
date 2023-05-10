import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function WhatWeOffer() {
  return (
    <>
      <Container className="flow py-5  text-secondary d-flex justify-content-evenly">
        <Row>
          <h3 className="text-center">What we offer</h3>
          <Col xs={4} className="d-flex justify-content-evenly">
            <div >
              <h3 className="fs-6 text-dark">Digital Services</h3>
              <h3 className="fs-6 ">Domain Registration</h3>
              <h3 className="fs-6 ">Hosting services</h3>
              <h3 className="fs-6 ">Website & Email</h3>
              <h3 className="fs-6 ">SEO</h3>
              <h3 className="fs-6 ">Social Media Networking</h3>
              <h3 className="fs-6 ">Branding</h3>
              <h3 className="fs-6 ">Digital Marketing</h3>
              <h3 className="fs-6 ">OTT & Live Streaming</h3>
            </div>
          </Col>
          <Col xs={4} className="d-flex justify-content-evenly">
            <div>
              <h3 className="fs-6 text-dark">Application Development</h3>
              <h3 className="fs-6 ">Desktop Application</h3>
              <h3 className="fs-6 ">Customization of CMS</h3>
              <h3 className="fs-6 ">Web Applications</h3>
              <h3 className="fs-6 ">Mobile Application</h3>
              <h3 className="fs-6 ">Mobile Application</h3>
            </div>
          </Col>
          <Col xs={4} className="d-flex justify-content-evenly">
            <div>
              <h3 className="fs-6 text-dark ">Support Services</h3>
              <h3 className="fs-6 ">IT Consultation</h3>
              <h3 className="fs-6 ">Cyber Security</h3>
              <h3 className="fs-6 ">Project Management</h3>
              <h3 className="fs-6 ">Product Maintenance</h3>
              <h3 className="fs-6 ">Performance Optimization</h3>
              <h3 className="fs-6 ">Database Fine-tuning</h3>
              <h3 className="fs-6 ">Data migration</h3>
              <h3 className="fs-6 ">Office Automation</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WhatWeOffer;
