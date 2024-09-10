import { GoArrowDownRight } from "react-icons/go";
import "./Transaction.css";
import { transactions } from "../../Data/data";

const Transactions = () => {
  return (
    <div className="item grid-common  grid-c4">
      <div className="title">
        <h3>Transaction</h3>
      </div>
      <div className="grid-content">
        {transactions.map((transaction, id) => (
          <div className="transaction_list" key={transaction.id}>
            <GoArrowDownRight />

            <p>{transaction.description}</p>
            <p className="date">{transaction.date}</p>
            <p>{transaction.amount}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
