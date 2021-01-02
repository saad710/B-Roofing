import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, Col, Row } from "react-bootstrap";
import slideLogo from "../assets/Large Logo.png";
import "../styles/TopBanner.css";

const TopBanner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{ marginTop: "3rem" }}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        nextIcon={false}
        prevIcon={false}
        indicators={false}
        interval={3000}
      >
        <Carousel.Item className="slide-container ">
          <Row>
            <Col className="justify-content-md-center">
              <img
                className="d-block w-100"
                src={slideLogo}
                alt="First slide"
                style={{ opacity: 0 }}
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className="slide-container ">
          <Row>
            <Col className="justify-content-md-center">
              <img
                className="d-block w-100"
                src={slideLogo}
                alt="Second slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className="slide-container ">
          <Row>
            <Col className="justify-content-md-center">
              <img
                className="d-block w-100"
                src={slideLogo}
                alt="Third slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopBanner;
