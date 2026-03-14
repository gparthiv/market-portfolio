import { usePortfolio } from "../context/usePortfolio"
import { getSectorAllocation } from "../utils/sectorCalculations"

export function useSectorAllocation() {

  const { holdings } = usePortfolio()

  const sectorData = getSectorAllocation(holdings)

  return sectorData
}