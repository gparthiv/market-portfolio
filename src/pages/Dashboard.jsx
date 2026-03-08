import { portfolio } from "../data/mockPortfolio"
import HoldingsTable from "../components/portfolio/HoldingsTable"
import PortfolioSummary from "../components/portfolio/PortfolioSummary"


export default function Dashboard() {
  const holdings = portfolio.holdings

  const totVal = holdings.reduce((tot, stock) => {
    return tot + stock.quantity * stock.currentPrice
  }, 0)

  const totalInvested = holdings.reduce((tot, stock) => {
    return tot + stock.quantity * stock.avgPrice
  }, 0)

  const totPnL = totVal - totalInvested




  return (
    <div> 
      <PortfolioSummary
        totVal={totVal}
        totPnL={totPnL}
      />
      <HoldingsTable holdings={holdings} />

    </div>
  )
}