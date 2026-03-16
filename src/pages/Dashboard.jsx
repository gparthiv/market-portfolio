import AddStockForm from "../components/portfolio/AddStockForm"
import PortfolioSummary from "../components/portfolio/PortfolioSummary"
import HoldingsTable from "../components/portfolio/HoldingsTable"
import StockPieChart from "../components/charts/StockPieChart"
import SectorPieChart from "../components/charts/SectorPieChart"
export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AddStockForm />
        <PortfolioSummary />
      </div>
      <HoldingsTable />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StockPieChart />
        <SectorPieChart />
      </div>
    </div>
  )
}