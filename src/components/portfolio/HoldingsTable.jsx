import HoldingRow from "./HoldingRow";
import { usePortfolio } from "../../context/usePortfolio"

export default function HoldingsTable() {
  const { holdings } = usePortfolio()
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Avg Price</th>
          <th>Current Price</th>
          <th>PnL</th>
          <th>Sell Quantity</th>
        </tr>
      </thead>

      <tbody>

        {holdings.map((stock) => (
          <HoldingRow
            key={stock.id}
            stock={stock}
          />
        ))}

      </tbody>
    </table>
  )
}