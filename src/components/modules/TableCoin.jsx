import { v4 as uuidv4 } from "uuid";
import { theadData } from "../constant/helper";
import TableRow from "./TableRow";
import Loading from "../elements/Loading";
import { TableCoinDIv } from "../styles/TableCoin.styled";

const TableCoin = ({ coins, isLoading, currency, setChart }) => {
  return (
    <TableCoinDIv>
      {isLoading ? (
        <Loading />
      ) : (
        <table className="table">
          <thead>
            <tr>
              {theadData.map((item) => (
                <th key={item.id}>{item.head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                key={uuidv4()}
                coin={coin}
                setChart={setChart}
                currency={currency}
              />
            ))}
          </tbody>
        </table>
      )}
    </TableCoinDIv>
  );
};

export default TableCoin;
