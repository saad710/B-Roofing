import React from "react";
import { Container, Row } from "react-bootstrap";

const ConcreteTiles = () => {
  function viewMouseEnter(e) {
    e.target.style.background = "white";
    e.target.style.color = "#FF7314";
  }
  function viewMouseLeave(e) {
    e.target.style.background = "#FF7314";
    e.target.style.color = "white";
  }

  return (
    <div>
      <Container style={{ marginTop: "4rem" }}>
        <Row className="justify-content-md-center">
          <p style={{ fontSize: "30px", color: "#393535" }}>Concrete Tiles</p>
        </Row>
        <Row
          className="justify-content-md-center"
          style={{ textAlign: "center" }}
        >
          <p style={{ color: "#505050", fontSize: "14px", wordSpacing: "3px" }}>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </Row>
        <Row className="justify-content-md-center">
          <button
            onMouseEnter={viewMouseEnter}
            onMouseLeave={viewMouseLeave}
            style={{
              padding: "5px 15px",
              borderRadius: "15px",
              border: "1px solid #FF7314",
              backgroundColor: "#FF7314",
              color: "white",
              fontSize: "14px",
            }}
          >
            View More
          </button>
        </Row>
      </Container>
    </div>
  );
};

export default ConcreteTiles;
