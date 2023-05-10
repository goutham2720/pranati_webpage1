import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function ServiceSection() {
  return (
    <Row className="d-flex justify-content-evenly py-5">
      <Card className="py-2 fw-bolder text-center fs-2 bg-secondary text-white my-3 ">
        Services
      </Card>
      <Col sm={3}>
        <Card className="shadow  bg-body rounded">
          <Card.Img
            variant="top"
            src="https://pranati.co.in/wp-content/uploads/2018/09/Technology-development.jpg"
          />
          <Card.Body>
            <Card.Title>Technology & Development</Card.Title>
            <Card.Text>
              We develop Custom, user-friendly and sleek websites, mobile apps
              with latest technology and standard with high quality and
              performance.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={3}>
        <Card className="shadow  bg-body rounded">
          <Card.Img
            variant="top"
            src="https://pranati.co.in/wp-content/uploads/2018/10/Domainhostingwebemailseo-1.jpg"
          />
          <Card.Body>
            <Card.Title>Online Presence</Card.Title>
            <Card.Text>
              We have providing a complete solution for your online presence and
              digital requirements like Domain registration, Web Hosting,
              Website development, Email
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={3}>
        <Card className="shadow  bg-body rounded">
          <Card.Img
            variant="top"
            src="https://pranati.co.in/wp-content/uploads/2018/10/Digital-Marketign-and-branding275x183.jpg"
          />
          <Card.Body>
            <Card.Title>Branding & Digital Marketing</Card.Title>
            <Card.Text>
              Creating a brand requires careful analysis of your target
              customers and market trends. We need to have a clear idea of how
              and what steps we need to create for your brand.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ServiceSection;
