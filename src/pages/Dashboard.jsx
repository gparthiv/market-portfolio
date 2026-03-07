import { portfolio } from "../data/mockPortfolio"
import HoldingsTable from "../components/portfolio/HoldingsTable"

export default function Dashboard() {

  const holdings = portfolio.holdings
  const totVal = holdings.reduce((tot, stock) => {
    return tot + stock.quantity * stock.currentPrice
  }, 0)
  return (
    <div>
      <h2>Portfolio Overview</h2>
      <h3>Total Portfolio Value: {totVal}</h3>

      <HoldingsTable holdings={holdings} />

    </div>
  )
}