export function calculateTotalValue(holdings) {
  return holdings.reduce(
    (tot, stock) => tot + stock.quantity * stock.currentPrice,
    0
  )
}

export function calculateTotalInvested(holdings) {
  return holdings.reduce(
    (tot, stock) => tot + stock.quantity * stock.avgPrice,
    0
  )
}

export function calculateTotalPnL(holdings) {
  const totalValue = calculateTotalValue(holdings)
  const totalInvested = calculateTotalInvested(holdings)

  return totalValue - totalInvested
}