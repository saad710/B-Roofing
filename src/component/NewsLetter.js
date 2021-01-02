import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../styles/NewsLetter.css";

const NewsLetter = () => {
    return (
        <div className="news-letter">
            <Container style={{marginTop:"4rem",backgroundColor: "#FF7314",padding:"0.5rem"}}>
                <Row className="justify-content-md-center">
                    <Col sm={3}>
                        <h4 style={{color:"white",marginLeft:"4rem"}}>NEWSLETTER</h4>
                    </Col>
                    <Col sm={6}>
                        <h5 style={{color:"white",fontSize:"16px"}}>Lorem ipsum dolor sit amet, consectetur adipisic.</h5>
                    </Col>
                    <Col sm={3}>
                        <button className='btn btn-danger' style={{borderRadius: "20px", backgroundColor:"#FF7314", border:" 1px solid white",padding:"7px 20px",color:"white"}}>
                            Sign Up
                        </button> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLetter;