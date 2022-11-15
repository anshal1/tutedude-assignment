import React from "react";
import "./Earnings.css";
const Earnings = () => {
  return (
    <>
      <div className="main_earning_container">
        <div className="earning_info_container">
          <div id="earnings">
            <div className="earning_amount">
              <p className="earning_headings">Referral Earning</p>
              <p className="amount_earned">₹ 2,500</p>
            </div>
            <div className="no_of_referrals">
              <p className="earning_headings">Total Referrals</p>
              <p className="referral_no">7</p>
            </div>
            <div className="wallet_balance">
              <p className="earning_headings">Wallet Balance</p>
              <p className="wallet_amount">₹ 500</p>
            </div>
          </div>
          <div className="withdraw">
            <button>Withdraw Balance</button>
          </div>
          <div className="for_mobile">
            <div className="earning_amount">
              <p className="earning_headings">Referral Earning</p>
              <p className="amount_earned">₹ 2,500</p>
            </div>
            <div className="no_of_referrals">
              <p className="earning_headings">Total Referrals</p>
              <p className="referral_no">7</p>
            </div>
            <div className="wallet_balance">
              <p className="earning_headings">Wallet Balance</p>
              <p className="wallet_amount">₹ 500</p>
            </div>
            <div className="withdraw_mobile">
              <button>Withdraw Balance</button>
            </div>
          </div>
        </div>
        <div className="referral_code_">
          <div className="referral_code_container">
            <p className="referral_code_heading">Your Referral Code </p>
            <p className="code">EDCH54</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Earnings;
