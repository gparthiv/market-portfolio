import { useState } from "react"
export default function HoldingRow({ stock, onSellStock }) {
  const [sellQty, setSellQty] = useState("")
  const pnl = (stock.currentPrice - stock.avgPrice) * stock.quantity
  return (
    <tr>
      <td>{stock.symbol}</td>
      <td>{stock.quantity}</td>
      <td>{stock.avgPrice}</td>
      <td>{stock.currentPrice}</td>

      <td style={{ color: pnl > 0 ? "green" : "red" }}>
        {pnl}
      </td>

      <td>
        <input
          type="number"
          placeholder="Qty"
          value={sellQty}
          onChange={(e) => setSellQty(e.target.value)}
        />

        <button
          onClick={() => {
            onSellStock(stock.id, Number(sellQty))
            setSellQty("")
          }}
        >
          Sell
        </button>
      </td>
    </tr>
  )

}