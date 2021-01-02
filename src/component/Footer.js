import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  function footerMouseEnter(e) {
    e.target.style.color = "white";
  }
  function footerMouseLeave(e) {
    e.target.style.color = "#777777";
  }
  return (
    <div className="footer-part">
      <Container>
        <Row>
          <Col>
            <small onMouseEnter={footerMouseEnter}
                onMouseLeave={footerMouseLeave}>Powered by Instalogic Inc</small>
          </Col>
          <Col md={{ span: 3, offset: 3 }}>
            <small onMouseEnter={footerMouseEnter}
                onMouseLeave={footerMouseLeave}>© 2020 R&B Roofing Inc </small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
