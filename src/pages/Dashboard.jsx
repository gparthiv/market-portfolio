import { portfolio } from "../data/mockPortfolio"
import HoldingsTable from "../components/portfolio/HoldingsTable"

export default function Dashboard() {

  const holdings = portfolio.holdings

  return (
    <div>
      <h2>Portfolio Overview</h2>

      <HoldingsTable holdings={holdings} />
      
    </div>
  )
}