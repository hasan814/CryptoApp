import React, { useState } from "react";
import { ChartDiv } from "../styles/Chart.styled";
import { convertData } from "../../services/ConverData";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ chart, setChart }) => {
  // ============= State ============
  const [type, setType] = useState("prices");

  // ============= Function ============
  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  // ============= Rendering ============
  return (
    <ChartDiv>
      <span onClick={() => setChart(null)} className="cross">
        X
      </span>
      <div className="chart">
        <div className="name">
          <img src={chart.coin.image} alt={chart.coin.name} />
          <p>{chart.coin.name}</p>
        </div>
        <div className="graph">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={convertData(chart, type)}>
              <Line
                type="monotone"
                dataKey={type}
                stroke="#3874ff"
                strokeWidth="2px"
              />
              <CartesianGrid stroke="#404042" />
              <YAxis dataKey={type} domain={["auto", "auto"]} />
              <XAxis dataKey='date' hide />
              <Legend />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="types" onClick={typeHandler}>
          <button className={type === "prices" ? "selected" : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? "selected" : null}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? "selected" : null}>
            Total Volumes
          </button>
        </div>
        <div className="details">
          <div>
            <p>Prices:</p>
            <span>${chart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span>${chart.coin.ath}</span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>${chart.coin.market_cap.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </ChartDiv>
  );
};

export default Chart;
