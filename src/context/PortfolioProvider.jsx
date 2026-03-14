import { useState } from "react"
import { PortfolioContext } from "./PortfolioContext"
import { portfolio } from "../data/mockPortfolio"
import { calculateTotalValue, calculateTotalPnL } from "../utils/portfolioCalculations"

export function PortfolioProvider({ children }) {

  const [holdings, setHoldings] = useState(portfolio.holdings)

  const totVal = calculateTotalValue(holdings)
  const totPnL = calculateTotalPnL(holdings)

  function handleAddStock(newStock) {
    const existingStock = holdings.find(
      stock => stock.symbol === newStock.symbol
    )

    if (existingStock) {

      const updatedHoldings = holdings.map(stock => {

        if (stock.symbol === newStock.symbol) {

          const totalQty = stock.quantity + newStock.quantity

          const newAvgPrice =
            ((stock.quantity * stock.avgPrice) +
              (newStock.quantity * newStock.avgPrice)) / totalQty

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

      setHoldings(prev => [...prev, newStock])

    }
  }

  function handleSellStock(id, quantityToSell) {

    setHoldings(prev =>
      prev
        .map(stock => {

          if (stock.id === id) {

            if (quantityToSell > stock.quantity)
              return stock

            const newQuantity = stock.quantity - quantityToSell

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

  const value = {
    holdings,
    totVal,
    totPnL,
    handleAddStock,
    handleSellStock
  }

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}