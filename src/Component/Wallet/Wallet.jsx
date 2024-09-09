import React from "react";
import "./Wallet.css";
import { GoArrowUpRight,GoArrowDownRight } from "react-icons/go";
const Wallet = () => {
  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <p className="grid-Name">Wallet</p>
        <h1>$ 4,523.98</h1>
      </div>
      <div className="grid-expenditure">
        <div className="income">
          <div className="income_icon">
            <GoArrowUpRight className="icon" />
          </div>
          <div className="income-amount">
            <h3>$ 3,030.98</h3>
            <span>Income</span>
          </div>
        </div>
        <div className="Expenses">
          <div className="Expenses_icon">
            <GoArrowDownRight className="icon" />
          </div>
          <div className="Expenses-amount">
            <h3>$ 223.98</h3>
            <span>Expenses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
