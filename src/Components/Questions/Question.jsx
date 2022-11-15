import React from "react";
import "./Question.css";
import people from "./img/people.png";
import tag from "./img/tag.png";
import rupee from "./img/rupee.png";
import percent from "./img/percent.png";
import wallet from "./img/wallet.png";
import QuestionCard from "./QuestionCard";
import { useNavigate } from "react-router-dom";
const Question = () => {
  const navi = useNavigate();
  return (
    <>
      <div className="main_question_container">
        <div className="questions_heading">
          <p>How does it work ?</p>
        </div>
        <div className="questions">
          <QuestionCard
            img={people}
            question_heading="Invite your Friends"
            answer="Share the link tutedude.com with
your friends"
          />
          <QuestionCard
            img={tag}
            question_heading="Friend purchases any course"
            answer="Using your REFERRAL CODE in the payments page"
          />
          <QuestionCard
            img={rupee}
            question_heading="You get ₹ 200 as referral money"
            answer="On total purchase the friend makes, into your wallet"
          />
          <QuestionCard
            img={percent}
            question_heading="Your Friend gets ₹ 200 Off "
            answer="On his overall fee on successful purchase using your referral code "
          />
          <QuestionCard
            img={wallet}
            question_heading="Transfer money from wallet"
            answer="When the wallet balance reaches
            ₹200 or more, you can withdraw it"
          />
        </div>
        <div className="footer">
          <p
            onClick={() => {
              document.getElementById("home").id = "home_hide";
              setTimeout(() => {
                navi("/refer/earn");
              }, 400);
            }}
          >
            Friends Who Enrolled
          </p>
          <br />
          <p>Terms & Conditions</p>
        </div>
      </div>
    </>
  );
};

export default Question;
