import "./Earning.css";
import { GoArrowUpRight } from "react-icons/go";
import Chart from "react-apexcharts";
import { useState } from "react";
const Earnings = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <div className="item grid-common grid-c5">
      <div className="title">
        <h3>Monthly Earnings</h3>
      </div>
      <div className="income">
        <span>income</span>
        <GoArrowUpRight className="icon" />
      </div>
      <div className="graph">
        <span>$22,124.00</span>
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          height={140}
        />
      </div>
    </div>
  );
};

export default Earnings;
