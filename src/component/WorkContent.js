import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import one from "../assets/Image-1.png";
import two from "../assets/slider-2.png";
import three from "../assets/slider-3.png";

const WorkContent = () => {
    function servicesMouseEnter(e){
        e.target.style.width="19rem";
        e.target.style.height="17rem";
        e.target.style.border="1px solid black";
    }
    function servicesMouseLeave(e){
        e.target.style.width="18rem";
        e.target.style.height="16rem";
        e.target.style.border="none";
    }

    return (
        <div style={{marginTop: "5rem"}} id="about">
            <h3 style={{textAlign:"center",marginBottom: "2rem"}}>What We Do</h3>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <img onMouseEnter={servicesMouseEnter} onMouseLeave={servicesMouseLeave} src={one} style={{height:"16rem", width:"18rem"}} alt=""/>
                    </Col>
                    <Col>
                        <img onMouseEnter={servicesMouseEnter} onMouseLeave={servicesMouseLeave} src={two} style={{height:"16rem", width:"18rem"}}  alt=""/>
                    </Col>
                    <Col>
                        <img onMouseEnter={servicesMouseEnter} onMouseLeave={servicesMouseLeave} src={three} style={{height:"16rem", width:"18rem"}}  alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkContent;