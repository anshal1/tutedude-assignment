import React from "react";
import { useState } from "react";
import "./Card.css";
const Card = (props) => {
    const [course, setcourse] = useState(props.courses);
  return (
    <>
      <div className="main_card_container">
        <div className="name_container">
          <p className="name">{props.name}</p>
          <p className="date">{props.date}</p>
        </div>
        <div className="enrolled_courses">
          <div className="no_of_courses_enrolled">
          <p>Courses Enrolled({props.no_of_courses})</p>
          </div>
          <div className="enrolled_courses_name">
            {course.map((e)=>{
                return <p key={e}>{e}</p>
            })}
          </div>
        </div>
        <div className="referral_amount">
          <p className="amount_text">Referral Amount </p>
          <p className="amount">{props.amount}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
