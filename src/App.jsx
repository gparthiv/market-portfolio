import Navbar from "./components/layout/Navbar"
import Dashboard from "./pages/Dashboard"
import { PortfolioProvider } from "./context/PortfolioProvider"

function App() {
  return (
    <PortfolioProvider>
      <Navbar />
      <Dashboard />
    </PortfolioProvider>
  )
}

export default App