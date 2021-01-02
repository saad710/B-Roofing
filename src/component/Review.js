import React from "react";
import ReviewCard from "./ReviewCard";
import groupStar from "../assets/group-star.png";
import comment from '../assets/comment.png';
import { Col, Row } from "react-bootstrap";

const Review = () => {
  return (
      <div id="gallery" style={{padding: '3rem', backgroundColor: '#000000BF', marginTop:"4rem"}}>
        <Row>
          <Col>
            <ReviewCard
              src={groupStar}
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident."
              name="John Smith"
              comment={comment}
            />
          </Col>
          <Col>
            <ReviewCard
              src={groupStar}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua ut enim ad minim."
              name="Sam Carter"
              comment={comment}
            />
          </Col>
          <Col>
            <ReviewCard
              src={groupStar}
              description="Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, architecto beatae vitae dicta."
              name="Dana Morrison"
              comment={comment}
            />
          </Col>
        </Row>
      </div>
  );
};

export default Review;
