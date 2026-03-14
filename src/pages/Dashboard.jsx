import AddStockForm from "../components/portfolio/AddStockForm"
import PortfolioSummary from "../components/portfolio/PortfolioSummary"
import HoldingsTable from "../components/portfolio/HoldingsTable"
import PortfolioPieChart from "../components/charts/PortfolioPieChart"

export default function Dashboard() {
  return (
    <div style={{ padding: "20px", marginBottom: "30px" }}>
      <AddStockForm />
      <PortfolioSummary />
      <HoldingsTable />
      <PortfolioPieChart />
    </div>
  )
}