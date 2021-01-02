import React from "react";
import { Nav } from "react-bootstrap";
import logo from "../assets/Logo-1.png";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import "../styles/BottomHeader.css";

const BottomHeader = () => {
  return (
    <div className="row bottom-header">
      <div className="col-md-4">
        <img
          style={{ position: "absolute", top: "-30px", left: "120px" }}
          src={logo}
          alt=""
        />
      </div>
      <div className="col-md-5">
        <Nav
          style={{ top: 70, position: "fixed", zIndex: "1" }}
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link
              className="bottom-nav-item"
              href="#home"
              style={{ color: "#393535" }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="bottom-nav-item"
              href="#about"
              style={{ color: "#393535" }}
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="bottom-nav-item"
              href="#services"
              style={{ color: "#393535" }}
            >
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="bottom-nav-item"
              href="#products"
              style={{ color: "#393535" }}
            >
              Products
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="bottom-nav-item"
              href="#gallery"
              style={{ color: "#393535" }}
            >
              Gallery
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="bottom-nav-item"
              href="#contact"
              style={{ color: "#393535"}}
            >
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="col-md-3" style={{ top: 25, paddingLeft: '3rem'}}>
        <FaFacebook
          style={{
            color: '#FF7314',
            borderRadius: "40px",
            marginRight: "0.8rem",
            backgroundColor: 'white',
          }}
        />
        <FiInstagram
          style={{
            backgroundColor: "#FF7314",
            color: "white",
            borderRadius: "40px",
            marginRight: "0.8rem",
          }}
        />
        <TiSocialLinkedinCircular
          style={{
            backgroundColor: "#FF7314",
            color: "white",
            borderRadius: "40px",
          }}
        />
      </div>
    </div>
  );
};

export default BottomHeader;
