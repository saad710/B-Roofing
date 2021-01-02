import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import firstIcon from "../assets/Icon-10.png";
import secondIcon from "../assets/Icon-9.png";
import thirdIcon from "../assets/Icon-8.png";
import fourthIcon from "../assets/Icon-7.png";
import "../styles/ExperiencePart.css";

const ExperiencePart = () => {
  function expMouseEnter(e) {
    e.target.style.color = "#FF7314";
  }
  function expMouseLeave(e) {
    e.target.style.color = "white";
  }
  return (
    <div className="experience-part">
      <Container
        style={{ marginTop: "10rem", padding: "5.5rem", color: "white" }}
      >
        <Row className="justify-content-md-center">
          <Col>
            <Row>
              <Col sm={4}>
                <img src={firstIcon} alt="" />
              </Col>
              <Col sm={8} style={{ paddingRight: "3.5rem" }}>
                <h2 onMouseEnter={expMouseEnter} onMouseLeave={expMouseLeave}>
                  40+
                </h2>
                <p
                  onMouseEnter={expMouseEnter}
                  onMouseLeave={expMouseLeave}
                  style={{ fontSize: "13px", fontWeight: "400" }}
                >
                  Years Experience
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col sm={4}>
                <img src={secondIcon} alt="" />
              </Col>
              <Col sm={8} style={{ paddingRight: "3.5rem" }}>
                <h2 onMouseEnter={expMouseEnter} onMouseLeave={expMouseLeave}>
                  102
                </h2>
                <p
                  onMouseEnter={expMouseEnter}
                  onMouseLeave={expMouseLeave}
                  style={{ fontSize: "13px", fontWeight: "400" }}
                >
                  Professional Roofers
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col sm={4}>
                <img src={thirdIcon} alt="" />
              </Col>
              <Col sm={8} style={{ paddingRight: "3.5rem" }}>
                <h2 onMouseEnter={expMouseEnter} onMouseLeave={expMouseLeave}>
                  74
                </h2>
                <p
                  onMouseEnter={expMouseEnter}
                  onMouseLeave={expMouseLeave}
                  style={{ fontSize: "13px", fontWeight: "400" }}
                >
                  Projects Completed
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col sm={4}>
                <img src={fourthIcon} alt="" />
              </Col>
              <Col sm={8} style={{ paddingRight: "3.5rem" }}>
                <h2 onMouseEnter={expMouseEnter} onMouseLeave={expMouseLeave}>
                  150
                </h2>
                <p
                  onMouseEnter={expMouseEnter}
                  onMouseLeave={expMouseLeave}
                  style={{ fontSize: "13px", fontWeight: "400" }}
                >
                  Satisfied Clients
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExperiencePart;
