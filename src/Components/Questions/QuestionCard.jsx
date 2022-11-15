import React from "react";
import "./Question.css";
const QuestionCard = (props) => {
  return (
    <p className="questions_text">
      <span id="logo_holder">
        <img src={props.img} alt="" />
      </span>
      <p className="question_content">
        <span className="question_heading">{props.question_heading}</span> <br />{" "}
        {props.answer}
      </p>
    </p>
  );
};

export default QuestionCard;
