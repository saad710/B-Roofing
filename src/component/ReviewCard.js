import React from 'react';
import '../styles/ReviewCard.css';
import StarIcon from '@material-ui/icons/Star';

const ReviewCard = ({src, description, name, comment}) => {
    function reviewMouseEnter(e){
        e.target.style.color="#FF7314"
    }
    function reviewMouseLeave(e){
        e.target.style.color="gray"
    }
    return (
        <div style={{position: 'relative', backgroundImage:"linear-gradient(360deg,#404040,black)", color: 'white', padding: '20px', fontSize: '14px', boxShadow: '0px 6px 18px -9px rgba(0, 0, 0, 0.75)', height: '95%'}}>
            <StarIcon onMouseEnter={reviewMouseEnter} onMouseLeave={reviewMouseLeave} style={{color: 'gray',width: '20px'}}/>
            <StarIcon onMouseEnter={reviewMouseEnter} onMouseLeave={reviewMouseLeave} style={{color: 'gray',width: '20px'}}/>
            <StarIcon onMouseEnter={reviewMouseEnter} onMouseLeave={reviewMouseLeave} style={{color: 'gray',width: '20px'}}/>
            <StarIcon onMouseEnter={reviewMouseEnter} onMouseLeave={reviewMouseLeave} style={{color: 'gray',width: '20px'}}/>
            <StarIcon onMouseEnter={reviewMouseEnter} onMouseLeave={reviewMouseLeave} style={{color: 'gray',width: '20px'}}/>
            <p style={{paddingTop: '20px', textAlign: 'justify'}}>{description}</p>
            <p>{name}</p>
            <img style={{width: '40px', height: '40px', position: 'absolute', right: '-10px', bottom: '-10px'}} src={comment} alt=""/>
        </div>
    );
};

export default ReviewCard;