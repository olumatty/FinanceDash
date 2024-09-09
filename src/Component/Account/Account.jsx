import React from "react";
import "./Account.css";
import { GoArrowUpRight} from "react-icons/go";
import { RiReceiptLine } from "react-icons/ri";
const Accounts = () => {
  return (
    <div className="grid-one-item grid-common grid-c3">
      <div className="Account-dashboard">
        <div className="Account-details">
          <h3 className="pay"> Payable Accounts</h3>
          <p>Keep your acccounts up to date<br/> to avoid issues.</p>
        </div>
        <div className="grid-item">
          <h3 className="text">14 OUT OF 16</h3>
          <div className="grid-item-progress">
            <div className="grid-item-fill"></div>
          </div>
        </div>
      </div>

      <div className="grid-Reciepts">
        <div className="grid-reciept-text">
          <h3>Reciepts</h3>
        </div>
        <div className="grid-Reciept">
          <div className="Salary">
            <div className="Salary_icon">
              <GoArrowUpRight className="icon" />
            </div>
            <div className="Salary_amount">
              <h3>$5,000.00</h3>
              <span>Salary</span>
            </div>
          </div>
          <div className="Salary">
            <div className="Salary_icon">
              <GoArrowUpRight className="icon" />
            </div>
            <div className="Salary_amount">
              <h3>$59.00</h3>
              <span>Service</span>
            </div>
          </div>
          <div className="Salary">
            <div className="Salary_icon">
              <GoArrowUpRight className="icon" />
            </div>
            <div className="Salary_amount">
              <h3>$3,030.00</h3>
              <span>Rent or Mortgage</span>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="grid-Payable">
        <div className="grid-payable-text">
          <h3>Payables</h3>
        </div>
        <div className="grid-payable">
          <div className="payable">
            <div className="payable_icon">
              <RiReceiptLine className="icon" />
            </div>
            <div className="payable_amount">
              <h3>$5,000.00</h3>
              <span>Salary</span>
            </div>
          </div>
          <div className="payable">
            <div className="payable_icon">
              <RiReceiptLine className="icon" />
            </div>
            <div className="payable_amount">
              <h3>$59.00</h3>
              <span className="service">Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
