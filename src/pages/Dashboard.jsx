import { portfolio } from "../data/mockPortfolio"

export default function Dashboard() {

  const holdings = portfolio.holdings

  return (
    <div>
      <h2>Portfolio Overview</h2>

      {holdings.map((stock) => (
        <div key={stock.symbol}>
          {stock.symbol} - {stock.quantity} 
        </div>
      ))}
    </div>
  )
}