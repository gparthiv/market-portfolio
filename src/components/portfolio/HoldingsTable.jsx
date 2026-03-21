import HoldingRow from "./HoldingRow";
import { usePortfolio } from "../../context/usePortfolio"

export default function HoldingsTable() {
  const { holdings } = usePortfolio()
  return (
    <table className="mx-auto w-full max-w-5xl text-sm divide-y divide-slate-100">
      <thead>
        <tr className="text-left text-slate-500 font-medium border-b-2 border-slate-200">
          <th className="th-base">Symbol</th>
          <th className="th-base">Quantity</th>
          <th className="th-base">Avg Price</th>
          <th className="th-base">Current Price</th>
          <th className="th-base">PnL</th>
          <th className="th-base">Sell Quantity</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-slate-100">

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