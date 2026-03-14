import { usePortfolio } from "../context/usePortfolio"
import {
  getBestStock,
  getWorstStock,
  getLargestHolding
} from "../utils/portfolioInsights"

export function usePortfolioInsights() {

  const { holdings } = usePortfolio()

  const bestStock = getBestStock(holdings)
  const worstStock = getWorstStock(holdings)
  const largestHolding = getLargestHolding(holdings)

  return {
    bestStock,
    worstStock,
    largestHolding
  }
}