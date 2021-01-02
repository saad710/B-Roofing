import React from 'react';
import firstImage from "../assets/Image-4.png"
import secondImage from "../assets/Image-3.png"
import {Row,Col} from "react-bootstrap";
import '../styles/WelcomePart.css';

const WelcomePart = () => {

    function learnMouseEnter(e){
        e.target.style.background='white';
        e.target.style.color = "#FF7314";
    }
    function learnMouseLeave(e){
        e.target.style.background = "#FF7314";
        e.target.style.color = "white";
    }
    function quoteMouseEnter(e) {
        e.target.style.background = "#FF7314";
        e.target.style.color = "white";
    }
    function quoteMouseLeave(e) {
        e.target.style.background = "white";
        e.target.style.color = "#FF7314";
    }

    return (
        <div id="home">
             <Row className="justify-content-md-center">
                <Col className="welcome-img">
                    <img className="stripe-img" src ={firstImage} alt = "" style={{position:"relative",top:'3rem',left:"10.5rem"}} />
                    <img className="hammer-img" src ={secondImage} alt = "" style={{position:"absolute", top:"7.8rem",right:"0.4rem"}} />
                </Col>
                <Col style={{marginTop:"4.5rem", marginRight:"1.5rem"}}>
                    <h2> Welcome </h2> <br/>
                    <p style={{wordSpacing:"3px",textAlign:"justify",marginRight:"12rem"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dicta iste architecto esse tempore qui consectetur dolores recusandae dolorum facilis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores fugit dicta corrupti eaque doloremque. Quos eaque ipsa quisquam exercitationem illo.</p><br/>
                    <div>
                        <button onMouseEnter={learnMouseEnter} onMouseLeave={learnMouseLeave} className='btn btn-danger' style={{borderRadius: "20px", backgroundColor: "#FF7314", border:"1px solid #FF7314", padding:"7px 20px"}}>
                            Learn More
                        </button>
                        <button onMouseEnter={quoteMouseEnter} onMouseLeave={quoteMouseLeave} className='btn btn-danger' style={{borderRadius: "20px", backgroundColor: "white", color:"#FF7314", border:"1px solid #FF7314", marginLeft:"1rem"}}>
                            Request Quote
                        </button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default WelcomePart;