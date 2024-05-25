import React, { useEffect, useState } from "react";
import { SearchDiv } from "../styles/Search.styled";
import axios from "axios";
import { searchCoin } from "../../services/cryptoApi";
import Loading from "../elements/Loading";

const Search = ({ currency, setCurrency }) => {
  // =========== State ============
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // =========== Effect ============
  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    }
    const search = async () => {
      try {
        const response = await axios.get(searchCoin(text), {
          signal: controller.signal,
        });
        if (response.data.coins) {
          setCoins(response.data.coins);
          setIsLoading(false);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") alert(error.message);
      }
    };
    setIsLoading(true);
    search();
    return () => controller.abort();
  }, [text]);

  // =========== Rendering ============
  return (
    <SearchDiv>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <select
        value={currency}
        onChange={(event) => setCurrency(event.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {(!!coins.length || isLoading) && (
        <div className="search-result">
          {isLoading && <Loading />}
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </SearchDiv>
  );
};

export default Search;
