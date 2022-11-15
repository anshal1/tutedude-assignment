import React from "react";
import "./Home.css";
import Earnings from "../Earnings/Earnings.jsx";
import Question from "../Questions/Question.jsx";
import { useEffect } from "react";
const Home = () => {
    useEffect(()=>{
        const main = document.getElementById("home_hide");
        const observer = new IntersectionObserver((entries)=>{
          entries.forEach((entry)=>{
            if(entry.isIntersecting){
              entry.target.id = "home";
            }
          })
        }, {
          threshold:0
        })
        observer.observe(main);
      }, [])
  return (
    <>
      <div id="home_hide">
        <Earnings />
        <Question />
      </div>
    </>
  );
};

export default Home;
