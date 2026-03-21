import { usePortfolio } from "../../context/usePortfolio"
import { usePortfolioInsights } from "../../hooks/usePortfolioInsights"
export default function PortfolioSummary() {
  const { totVal, totPnL } = usePortfolio()
  const { bestStock, worstStock, largestHolding } = usePortfolioInsights()
  return (
    <div className="w-full bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-base font-semibold text-slate-800 mb-4">
        Portfolio Overview
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
            Total Value
          </p>
          <p className="text-2xl font-semibold text-slate-800 mt-1">
            ₹{totVal.toLocaleString()}
          </p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
            Total P&L
          </p>
          <p className={`text-2xl font-semibold mt-1 ${totPnL >= 0 ? "text-green-600" : "text-red-500"}`}>
            {totPnL >= 0 ? "+" : ""}{totPnL.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="border-t border-slate-100 pt-4 mt-4 flex flex-col gap-2">
        <h3 className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">
          Insights
        </h3>
        {bestStock && (
          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Best performer</span>
            <span className="text-sm font-medium text-slate-800">{bestStock.symbol}</span>
          </div>
        )}
        {worstStock && (
          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Worst performer</span>
            <span className="text-sm font-medium text-slate-800">{worstStock.symbol}</span>
          </div>
        )}
        {largestHolding && (
          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Largest holding</span>
            <span className="text-sm font-medium text-slate-800">{largestHolding.symbol}</span>
          </div>
        )}
      </div>
    </div>
  )
}