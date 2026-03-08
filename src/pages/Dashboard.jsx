import { portfolio } from "../data/mockPortfolio"
import HoldingsTable from "../components/portfolio/HoldingsTable"
import PortfolioSummary from "../components/portfolio/PortfolioSummary"
import PortfolioPieChart from "../components/charts/PortfolioPieChart"
import { useState } from "react"
import AddStockForm from "../components/portfolio/AddStockForm"

export default function Dashboard() {
  const [holdings, setHoldings] = useState(portfolio.holdings)

  const totVal = holdings.reduce((tot, stock) => {
    return tot + stock.quantity * stock.currentPrice
  }, 0)

  const totalInvested = holdings.reduce((tot, stock) => {
    return tot + stock.quantity * stock.avgPrice
  }, 0)

  const totPnL = totVal - totalInvested

  function handleAddStock(newStock) {
    setHoldings([...holdings, newStock])
  }


  return (
    <div style={{ padding: "20px", marginBottom: "30px" }}>
      <AddStockForm onAddStock={handleAddStock} />
      <PortfolioSummary
        totVal={totVal}
        totPnL={totPnL}
      />
      <HoldingsTable holdings={holdings} />
      <PortfolioPieChart holdings={holdings} />

    </div>
  )
}