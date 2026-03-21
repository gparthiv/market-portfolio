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
    <tr className="hover:bg-slate-50">
      <td className="py-3 px-2 font-medium text-slate-800">
        {stock.symbol}
      </td>

      <td className="py-3 px-2 text-slate-600">
        {stock.quantity}
      </td>

      <td className="py-3 px-2 text-slate-600">
        {stock.avgPrice}
      </td>

      <td className="py-3 px-2 text-slate-600">
        {stock.currentPrice}
      </td>

      <td className={`py-3 px-2 font-medium ${pnl > 0 ? "text-green-600" : "text-red-500"}`}>
        {Number(pnl).toFixed(2)}
      </td>

      {/* SELL COLUMN */}
      <td className="py-3 px-2">
        <div className="flex gap-2 items-center">
          <input
            className="input-base"
            type="number"
            placeholder="Qty"
            min="1"
            value={sellQty}
            onChange={(e) => setSellQty(e.target.value)}
          />

          <button
            onClick={handleSell}
            className="border border-slate-300 px-3 py-1 rounded text-sm hover:bg-slate-100 transition-colors duration-150"
          >
            Sell
          </button>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-xs mt-1">
            {errorMessage}
          </p>
        )}
      </td>
    </tr>
  )

}