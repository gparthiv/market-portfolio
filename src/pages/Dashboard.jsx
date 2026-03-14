import AddStockForm from "../components/portfolio/AddStockForm"
import PortfolioSummary from "../components/portfolio/PortfolioSummary"
import HoldingsTable from "../components/portfolio/HoldingsTable"
import StockPieChart from "../components/charts/StockPieChart"
import SectorPieChart from "../components/charts/SectorPieChart"
export default function Dashboard() {
  return (
    <div style={{ padding: "20px", marginBottom: "30px" }}>
      <AddStockForm />
      <PortfolioSummary />
      <HoldingsTable />
      <StockPieChart />
      <SectorPieChart />
    </div>
  )
}