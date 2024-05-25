import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import axios from "axios";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

const HomePage = () => {
  // ========== state ============
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [isLoading, setIsLoading] = useState(true);
  const [chart, setChart] = useState(null);

  // ========== Effect ============
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const response = await axios.get(getCoinList(page, currency));
        setCoins(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error in Fecthing Data : ", error);
      }
    };
    getData();
  }, [page, currency]);

  // ========== Rendering ============

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin
        coins={coins}
        isLoading={isLoading}
        currency={currency}
        setChart={setChart}
      />
      <Pagination page={page} setPage={setPage} />
      {chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
};

export default HomePage;
