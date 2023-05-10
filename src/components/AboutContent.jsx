import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Placeholder from "react-bootstrap/esm/Placeholder";
import ItSupport from "./ItSupport";

function AboutContent() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <Container>
        <div>
          <h3 className="mt-5">Who we are</h3>
          <p>
            Pranati Technologies is a group of technology experts having an
            average experience more than 23 years and more than 2,88,000 man
            hour work experience with the international clients. We are capable
            of handling various web technologies and application development. We
            have been working for international clients world-wide with remote
            development and support services.
          </p>
          <p>
            We have a Web Development and Branding Team which will take care of
            all your DIGITAL requirements. This team will help you to find
            Domain Names, Hosting, Web Designing, Logo Creation, E-Brochure
            Design, Flyer Design, SEO(Search Engine Optimization), Social Media
            Marketing, Free and Paid Advertisement, Branding and other
            promotional activities. We happy to give FREE consultation for your
            digital needs, those who are new to this DIGITAL world.
          </p>
        </div>
        <Row className="bg-dark text-light">
          <Col className="pt-5 px-3" sm={6}>
            <p>
              We are also capable of taking small and medium size web and
              related application development and their support and maintenance
              services. Our expertise starts from Simple content management
              systems, E-Commerce development, LMS(Learning Management System),
              OTT(Over The Top) technology for Live video Streaming on both Web
              and Mobile applications, other corporate supporting platforms and
              scientific application development.
            </p>
            <p>
              We have a specialized team for Microsoft Technologies those were
              capable for .NET and SQL server based application development, IIS
              Management services, Performance Optimization services, Code
              Optimization and upgrade services.
            </p>
          </Col>
          <Col sm={6}>
            <div className="pt-5">
              <div
                onClick={() => setOpen1(!open1)}
                aria-controls="digitalMarketing-collapse-text"
                aria-expanded={open1}
              >
                WHAT IS THE DIGITAL MARKETING ? 
              </div>
              <Placeholder xs={12} bg="info" size="xs" />
              <Collapse in={open1}>
                <div id="digitalMarketing-collapse-text">
                  Digital marketing is the marketing of products or services
                  using digital technologies, mainly on the Internet, but also
                  including mobile phones, display advertising, and any other
                  digital medium.
                </div>
              </Collapse>
              <div className="pt-5">
                <div
                  onClick={() => setOpen2(!open2)}
                  aria-controls="socialMediaMarketing-collapse-text"
                  aria-expanded={open2}
                >
                  WHAT IS SOCIAL MEDIA MARKETING ?
                </div>
                <Placeholder xs={12} bg="info" size="xs" />
                <Collapse in={open2}>
                  <div id="socialMediaMarketing-collapse-text">
                    Social media marketing is the use of social media platforms
                    and websites to promote a product or service.
                  </div>
                </Collapse>
              </div>
              <div className="pt-5 pb-5">
                <div
                  onClick={() => setOpen3(!open3)}
                  aria-controls="serchengin-collapse-text"
                  aria-expanded={open3}
                >
                  WHAT IS SEARCH ENGINE OPTIMIZATION (SEO)?
                </div>
                <Placeholder xs={12} bg="info" size="xs" />
                <Collapse in={open3}>
                  <div id="serchengin-collapse-text">
                    Search engine optimization (SEO) is the process of affecting
                    the online visibility of a website or a web page in a web
                    search engine’s unpaid results—often referred to as
                    “natural”, “organic”, or “earned” results.
                  </div>
                </Collapse>
              </div>
            </div>
          </Col>
        </Row>
        <ItSupport />
      </Container>
    </>
  );
}

export default AboutContent;
