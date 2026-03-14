import { usePortfolio } from "../../context/usePortfolio"

export default function PortfolioSummary() {
  const { totVal, totPnL } = usePortfolio()
  return (
    <div>
      <h2>Portfolio Overview</h2>

      <h3>
        Total Portfolio Value:{" "}
        {totVal.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h3>

      <h3 style={{ color: totPnL >= 0 ? "green" : "red" }}>
        Total Profit/Loss:{" "}
        {Math.abs(totPnL).toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h3>
    </div>
  )
}