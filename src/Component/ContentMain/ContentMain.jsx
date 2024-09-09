import Accounts from "../Account/Account";
import Card from "../Card/Card";
import EarningG from "../Earninggoal/Earningg";
import Earnings from "../Earnings/Earnings";
import Transactions from "../Transactions/Transaction";
import Wallet from "../Wallet/Wallet";
import "./ContentMain.css";
const ContentMain = () => {
  return (
    <div className="content-main-holder">
      <h2> Dashboard </h2>
      <div className="grid-one">
        <div className="box one">
          <Card />
        </div>
        <div className="box two">
          <Wallet />
        </div>
        <div className="box three">
        </div>
        <div className="box Four">
          <Transactions />
        </div>
        <div className="box Five">
          <Earnings />
        </div>
        <div className="box-six">
          <EarningG/>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
