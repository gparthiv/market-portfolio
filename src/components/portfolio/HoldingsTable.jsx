export default function HoldingsTable({ holdings }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Avg Price</th>
          <th>Current Price</th>
          <th>PnL</th>
        </tr>
      </thead>

      <tbody>
        
        {holdings.map((stock) => {
          const pnl = (stock.currentPrice - stock.avgPrice) * stock.quantity;

          return (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.quantity}</td>
              <td>{stock.avgPrice}</td>
              <td>{stock.currentPrice}</td>
              <td style={{ color: pnl > 0 ? "green" : "red" }}>{pnl}</td>

            </tr>
          )
        })}
      </tbody>
    </table>
  )
}