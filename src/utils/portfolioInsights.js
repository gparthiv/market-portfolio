export function getBestStock(holdings) {
  if (!holdings.length) return null

  return holdings.reduce((best, stock) => {
    const pnl = (stock.currentPrice - stock.avgPrice) * stock.quantity
    const bestPnl = (best.currentPrice - best.avgPrice) * best.quantity

    return pnl > bestPnl ? stock : best
  })
}

export function getWorstStock(holdings) {
  if (!holdings.length) return null

  return holdings.reduce((worst, stock) => {
    const pnl = (stock.currentPrice - stock.avgPrice) * stock.quantity
    const worstPnl = (worst.currentPrice - worst.avgPrice) * worst.quantity

    return pnl < worstPnl ? stock : worst
  })
}

export function getLargestHolding(holdings) {
  if (!holdings.length) return null

  return holdings.reduce((largest, stock) => {
    const value = stock.quantity * stock.currentPrice
    const largestValue = largest.quantity * largest.currentPrice

    return value > largestValue ? stock : largest
  })
}