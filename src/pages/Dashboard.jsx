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
    const existingStock = holdings.find(
      stock => stock.symbol === newStock.symbol
    )
    if (existingStock) {
      const updatedHoldings = holdings.map(stock => {
        if (stock.symbol === newStock.symbol) {
          const totalQty = stock.quantity + newStock.quantity
          const newAvgPrice =
            ((stock.quantity * stock.avgPrice) + (newStock.quantity * newStock.avgPrice)) / totalQty
          return {
            ...stock,
            quantity: totalQty,
            avgPrice: newAvgPrice
          }
        }
        return stock
      })
      setHoldings(updatedHoldings)
    } else {
      setHoldings([...holdings, newStock])
    }
  }

  function handleSellStock(id, quantitytoSell) {
    setHoldings(holdings.map(stock => {
      if (stock.id === id) {
        const newQuantity = stock.quantity - quantitytoSell
        if (newQuantity <= 0)
          return null
        return {
          ...stock,
          quantity: newQuantity
        }
      }
      return stock
    })
      .filter(Boolean)
    )
  }


  return (
    <div style={{ padding: "20px", marginBottom: "30px" }}>
      <AddStockForm onAddStock={handleAddStock} />
      <PortfolioSummary
        totVal={totVal}
        totPnL={totPnL}
      />
      <HoldingsTable holdings={holdings}
        onSellStock={handleSellStock} />
      <PortfolioPieChart holdings={holdings} />

    </div>
  )
}