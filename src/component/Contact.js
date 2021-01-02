import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logoWhite.png";
import "../styles/Contact.css";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";

const Contact = () => {
  function newsLetterMouseEnter(e) {
    e.target.style.color = "#FF7314";
  }
  function newsLetterMouseLeave(e) {
    e.target.style.color = "white";
  }
  return (
    <div className="contact-part" id="contact">
      <Container style={{ padding: "3rem" }}>
        <Row className="justify-content-md-center">
          <Col sm={1}>
            <p>Location</p>
            <br></br>
            <p>Phone</p>
            <p>Email</p>
          </Col>
          <Col sm={3}>
            <p>Location 546 New Brighton Drive SE Calgary, Alberta T2Z </p>
            <p style={{ marginTop: "0.3rem" }}>(403) 991 - 9602</p>
            <p style={{ marginTop: "0.6rem" }}>info@rbroofing.ca</p>
          </Col>
          <Col sm={2}>
            <p>Weekdays</p>
            <p style={{ marginTop: "0.9rem" }}>Weekends</p>
            <br />
            <div className="icon">
              <TiSocialFacebook
                onMouseEnter={newsLetterMouseEnter}
                onMouseLeave={newsLetterMouseLeave}
                style={{
                  border: " 1px solid #FF7314",
                  marginLeft: "0.5rem",
                  borderRadius: "3rem",
                }}
              />
              <AiOutlineInstagram
                onMouseEnter={newsLetterMouseEnter}
                onMouseLeave={newsLetterMouseLeave}
                style={{
                  border: " 1px solid #FF7314",
                  marginLeft: "0.5rem",
                  borderRadius: "3rem",
                }}
              />
              <TiSocialLinkedin
                onMouseEnter={newsLetterMouseEnter}
                onMouseLeave={newsLetterMouseLeave}
                style={{
                  border: " 1px solid #FF7314",
                  marginLeft: "0.5rem",
                  borderRadius: "3rem",
                }}
              />
            </div>
          </Col>
          <Col>
            <p>8.00am-5.00pm</p>
            <p>Closed</p>
          </Col>
          <Col>
            <img src={logo} style={{ height: "7rem", width: "11rem" }} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
