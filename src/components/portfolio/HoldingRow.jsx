import { useState } from "react"
import { usePortfolio } from "../../context/usePortfolio"

export default function HoldingRow({ stock }) {
const { handleSellStock } = usePortfolio()
  const [sellQty, setSellQty] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const pnl = (stock.currentPrice - stock.avgPrice) * stock.quantity

  function handleSell() {
    const qty = Number(sellQty)
    if (!sellQty || qty <= 0) {
      setErrorMessage("Enter valid quantity")
      return
    }
    setErrorMessage("")
    handleSellStock(stock.id, qty)
    setSellQty("")
  }

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
          min="1"
          value={sellQty}
          onChange={(e) => setSellQty(e.target.value)}
        />

        <button onClick={handleSell}>
          Sell
        </button>

        {errorMessage && (
          <div style={{ color: "red", fontSize: "12px" }}>
            {errorMessage}
          </div>
        )}
      </td>
    </tr>
  )

}