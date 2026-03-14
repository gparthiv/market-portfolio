import { usePortfolio } from "../../context/usePortfolio"
import { usePortfolioInsights } from "../../hooks/usePortfolioInsights"
export default function PortfolioSummary() {
  const { totVal, totPnL } = usePortfolio()
  const { bestStock, worstStock, largestHolding } = usePortfolioInsights()
  return (
    <div>
      <h2>Portfolio Overview</h2>
      <h3>Total Portfolio Value: {totVal.toLocaleString()}</h3>
      <h3 style={{ color: totPnL >= 0 ? "green" : "red" }}>
        Total Profit/Loss: {totPnL.toFixed(2)}
      </h3>
      <h3>Portfolio Insights</h3>
      {bestStock && (<p>Best Performer: <b>{bestStock.symbol}</b></p>)}
      {worstStock && (<p>Worst Performer: <b>{worstStock.symbol}</b></p>)}
      {largestHolding && (<p>Largest Holding: <b>{largestHolding.symbol}</b></p>)}
    </div>
  )
}