export default function PortfolioSummary({ totVal, totPnL }) {
  return (
    <div>
      <h2>Portfolio Overview</h2>

      <h3>Total Portfolio Value: {totVal}</h3>

      <h3 style={{ color: totPnL >= 0 ? "green" : "red" }}>
        Total Profit/Loss: {Math.abs(totPnL)}
      </h3>
    </div>
  )
}