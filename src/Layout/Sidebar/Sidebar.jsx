import React from "react";
import { RiDashboardHorizontalLine,RiWalletLine,RiStackLine, RiReceiptLine,RiSearchLine,RiSettings2Line,RiQuestionMark,RiLogoutBoxRLine } from "react-icons/ri";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img
            src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile-img"
          />
        </div>
        <span className="Name">Gadiel Machado</span>
        <span className="job">Designer</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className ="link" href="">
              <RiDashboardHorizontalLine className="side-icon" /><span>Dashboard</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a className ="link" href="">
              <RiWalletLine className="side-icon" /> <span>Wallet</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a className ="link" href="">
              <RiStackLine className="side-icon" /> <span>Transactions</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a className ="link"href="">
              <RiReceiptLine className="side-icon" /> <span>Revenue analytics</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a className ="link" href="">
              <RiSearchLine  className="side-icon" /><span>Search</span>
            </a>
          </li>
        </ul>
      </nav>
      <hr/>

      <nav className="navigation two">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="link" href="">
              <RiSettings2Line className="side-icon" /> <span>Setting</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a className="link"  href="">
              <RiQuestionMark className="side-icon" /><span>Help</span>
            </a>
          </li>
          <li className="nav-list-item">
            <a className="link"  href="">
              <RiLogoutBoxRLine className="side-icon" /><span> Log Out</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
