import React from "react";
import "./Reviews.css";
import { reviewData } from "../../../data/review";
//imported icons--->
import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="Reviews full-height" id="reviews">
      <div className="review-card">
        {reviewData.map((review, i) => (
          <div className="review-body" key={i}>
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="review-description">{review.text}</div>
            <div className="review-person">{review.name}</div>
            <div className="review-company">{review.subname}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
