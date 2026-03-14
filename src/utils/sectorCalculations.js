export function getSectorAllocation(holdings) {

  const sectorMap = {}
  holdings.forEach(stock => {

    const value = stock.quantity * stock.currentPrice

    if (sectorMap[stock.sector]) {
      sectorMap[stock.sector] += value
    } else {
      sectorMap[stock.sector] = value
    }

  })
  return Object.entries(sectorMap).map(([sector, value]) => ({
    name: sector,
    value
  }))
}