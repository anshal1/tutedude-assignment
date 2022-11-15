import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./MainContent.css";
const MainContent = () => {
  useEffect(()=>{
    const main = document.getElementsByClassName("main_content_box_hidden");
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList = "main_content_box";
        }
      })
    }, {
      threshold:0
    })
    observer.observe(main[0]);
  }, [])
  return (
    <>
      <div className="main_content_box_hidden">
        <div className="upper_box">
          <div className="referral_code">
            <ul className="referral_code_list">
              <li className="refferal_code_list_item" id="first">
                Your Referral Code{" "}
              </li>
              <li className="refferal_code_list_item" id="second">
                EDCH54
              </li>
            </ul>
          </div>
          <div className="balance">
            <ul className="wallent_balance">
              <li className="balance_amount">Wallet Balance</li>
              <li className="balance_amount">₹ 500</li>
            </ul>
          </div>
        </div>
        <div className="middle_content_box">
          <div className="heading">
            <p>
              Friends who enrolled<span id="num_of_card">(3)</span>
            </p>
          </div>
          <br />
          <div className="card_container_holder">
            <div className="cards">
              <Card
                courses={[
                  "UI/UX",
                  "Photoshop",
                  "Illustrator",
                  "Python",
                  "MERN",
                  "Java",
                ]}
                name="Dhiraj Saxsena"
                date="14 Sep, 2022"
                no_of_courses={6}
                amount="₹185"
              />
              <Card
                courses={[
                  "UI/UX",
                  "Photoshop",
                  "Illustrator",
                  "Python",
                  "MERN",
                  "Java",
                  "C++",
                  "HTML",
                  "Web Development",
                  "C",
                  "Ruby",
                ]}
                name="Subhash Mishra"
                date="15 Sep, 2022"
                no_of_courses={23}
                amount="₹485"
              />
              <Card
                courses={[
                  "UI/UX",
                  "Photoshop",
                  "Illustrator",
                  "Python",
                  "MERN",
                  "Java",
                ]}
                name="Prafull Kumar"
                date="14 Sep, 2022"
                no_of_courses={23}
                amount="₹485"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Terms & Conditions</p>
        </div>
      </div>
    </>
  );
};

export default MainContent;
