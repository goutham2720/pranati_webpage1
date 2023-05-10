import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/Button";
import { IoIosContact } from "react-icons/io";
import { BsFacebook,BsTwitter,BsLinkedin,BsYoutube,BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <div className="py-3 bg-dark " gap={3}>
      <Row>
        <Col sm={4} className=" px-5 ">
          <Image src="https://pranati.co.in/wp-content/uploads/2022/06/Pranati-_Technologies_QR_Code-150x150.png" />
        </Col>
        <Col sm={4} className="text-secondary px-5">
          <h3 className="fs-6" text="white">
            CONTACT INFO
          </h3>
          <h3 className="fs-6">Mobile: +91 80 720 90 144</h3>
          <h3 className="fs-6">Email: info@pranati.co.in</h3>
        </Col>
        <Col sm={4} className="d-flex align-items-center px-5 ">
          <Button as={Link} to="/Contact" className="pe-3 py-2 fs-5" variant="outline-info">
            <IoIosContact className="mx-3" />
            Write to us
          </Button>
        </Col>
      </Row>
      <div className="text-secondary text-center fs-4">
        <BsFacebook className="mx-3" />
        <BsTwitter className="mx-3" />
        <BsLinkedin className="mx-3" />
        <BsYoutube className="mx-3" />
        <BsInstagram className="mx-3" />
      </div>
    </div>
  );
}

export default ContactSection;
