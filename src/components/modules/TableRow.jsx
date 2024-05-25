import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { IoLogoUsd } from "react-icons/io";
import { MdEuro } from "react-icons/md";
import { PiCurrencyJpyDuotone } from "react-icons/pi";
import axios from "axios";
import { marketChart } from "../../services/cryptoApi";

const TableRow = ({ coin, currency, setChart }) => {
  // ============ Const =============
  const {
    id,
    image,
    symbol,
    name,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  } = coin;

  // ============ Function =============
  const showHandler = async () => {
    try {
      const response = await fetch(marketChart(id));
      const json = await response.json();
      setChart({ ...json, coin });
    } catch (error) {
      setChart(null);
    }
  };

  // ============ Rendering =============
  return (
    <tr>
      <td>
        <div className="symbol" onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td className="price-td">
        {currency === "usd" ? (
          <IoLogoUsd />
        ) : currency === "eur" ? (
          <MdEuro />
        ) : currency === "jpy" ? (
          <PiCurrencyJpyDuotone />
        ) : null}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? "success" : "error"}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt="" />
      </td>
    </tr>
  );
};

export default TableRow;
