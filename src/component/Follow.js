import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import whiteImage from "../assets/Dim.png";
import Circle from "../assets/Circle.png";
import "../styles/Follow.css";

const Follow = () => {
  function followMouseEnter(e) {
    e.target.style.height = "7.3rem";
  }
  function followMouseLeave(e) {
    e.target.style.height = "7rem";
  }

  return (
    <div>
      <Container className="follow-us" style={{ marginTop: "4rem" }}>
        <Row>
          <Col>
            {" "}
            <img
              src={whiteImage}
              style={{ height: "10rem", width: "10rem" }}
              alt=""
            />{" "}
          </Col>
          <Col>
            {" "}
            <img
              src={whiteImage}
              style={{ height: "10rem", width: "10rem" }}
              alt=""
            />{" "}
          </Col>
          <Col>
            {" "}
            <img
              src={whiteImage}
              style={{ height: "10rem", width: "10rem" }}
              alt=""
            />{" "}
          </Col>
          <Col>
            {" "}
            <img
              src={whiteImage}
              style={{ height: "10rem", width: "10rem" }}
              alt=""
            />{" "}
          </Col>
          <Col>
            {" "}
            <img
              src={whiteImage}
              style={{ height: "10rem", width: "10rem" }}
              alt=""
            />{" "}
          </Col>
          <Col>
            {" "}
            <img
              src={whiteImage}
              style={{ height: "10rem", width: "10rem" }}
              alt=""
            />{" "}
          </Col>
        </Row>
        <img
         onMouseEnter={followMouseEnter}
         onMouseLeave={followMouseLeave}
          className="circle-image"
          style={{ height: "7rem" }}
          src={Circle}
          alt=""
        />
      </Container>
    </div>
  );
};

export default Follow;
