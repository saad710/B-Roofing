import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import quality from "../assets/Icon-6.png";
import professional from "../assets/Icon-5.png";
import garuntee from "../assets/Icon-4.png";
import "../styles/Choose.css";

const Choose = () => {
    function chooseMouseEnter(e){
        e.target.style.color="#FF7314";
    }
    function chooseMouseLeave(e){
        e.target.style.color="white";
    }
    return (
        <div className="choose" style={{color:"white", marginTop:"6rem"}}>
            <Container>
                <Row className="justify-content-md-center" >
                    <Col sm={6} style={{padding:"4rem"}}>
                        <h4>Why Choose us?</h4>
                        <br/>
                        <p style={{wordSpacing:"3px",textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero expedita officiis asperiores totam id voluptas ducimus fugit. Debitis aliquam ipsum reiciendis modi reprehenderit, consequatur expedita placeat non sint esse?</p>
                    </Col>
                    <Col sm={2} style={{paddingTop:"7rem",paddingLeft:"4rem",backgroundImage:"linear-gradient(180deg,#404040,black)" }}>
                       <img src={quality} alt=""/> 
                       <h6 onMouseEnter={chooseMouseEnter} onMouseLeave={chooseMouseLeave} style={{marginTop:"0.5rem"}}>Quality</h6>
                    </Col>
                    <Col sm={2} style={{paddingTop:"7rem",paddingLeft:"4rem",backgroundImage:"linear-gradient(360deg,#404040,black)"}}>
                       <img src={professional} alt=""/>
                       <h6 onMouseEnter={chooseMouseEnter} onMouseLeave={chooseMouseLeave} style={{marginTop:"0.5rem"}}>Professional</h6>
                    </Col>
                    <Col sm={2} style={{paddingTop:"7rem",paddingLeft:"4rem",backgroundImage:"linear-gradient(180deg,#404040,black)"}}>
                       <img src={garuntee} alt=""/>
                       <h6 onMouseEnter={chooseMouseEnter} onMouseLeave={chooseMouseLeave} style={{marginTop:"0.5rem"}}>Garuntee</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Choose;