import React from "react";
import { Nav } from "react-bootstrap";
import "../styles/TopHeader.css";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const TopHeader = () => {
  return (
      <div className="row">
        <div
          style={{
            position: "relative",
            borderBottom: "50px solid #FF7314",
            borderRight: "60px solid #000000BF",
          }}
          className="col-md-4"
        ></div>
        <div
          style={{ backgroundColor: "#000000BF" }}
          className="col-md-8 d-flex justify-content-around"
        >
          <Nav
            style={{ marginTop: "0.7rem" }}
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item style={{marginRight: '0.8rem'}}>
                <FiPhone
                  style={{ color: "white", marginTop: '0.3rem'}}
                  className="topHeader-icon"
                />
            </Nav.Item>
            <Nav.Item style={{ color: "white", fontSize: "15px", marginRight: '2.5rem', marginTop: '0.3rem'}}>
                (403) 991 - 9602
            </Nav.Item>
            <Nav.Item style={{marginRight: '0.8rem', marginTop: '0.1rem'}}>
                <AiOutlineMail
                  style={{ color: "white"}}
                  className="topHeader-icon"
                />
            </Nav.Item>
            <Nav.Item  style={{ color: "white", fontSize: "15px", marginRight: '2.5rem', marginTop: '0.3rem'}}>
                Email Us!
            </Nav.Item>
            <Nav.Item style={{
                  color: "white",
                  border: "1px solid #FF7314",
                  borderRadius: "20px",
                  fontSize: "13px",
                  marginBottom: '0.3rem'
                }}
                className="quote"
                >
                Request Quote
            </Nav.Item>
          </Nav>
        </div>
      </div>
  );
};

export default TopHeader;
