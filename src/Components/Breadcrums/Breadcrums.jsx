import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Breadcrums.css";
import arrow from "./img/Arrow 17.png";
const Breadcrums = () => {
  const location = useLocation();
  const navi = useNavigate();
  return (
    <>
      <div className="main_breadcrums_container">
        <div className="breadcrums_text">
          {location.pathname === "/" ? (
            <p>UI/UX {`>`} Refer & Earn</p>
          ) : (
            <p
              onClick={() => {
                navi("/");
              }}
            >
              UI/UX {`>`} Refer & Earn {`>`} Friends Referred
            </p>
          )}
        </div>
      </div>
      {!location.pathname === "/" ? (
        <div className="go_back">
          <img src={arrow} alt="" />
          <p>go back</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Breadcrums;
