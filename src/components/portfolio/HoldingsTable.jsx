export default function HoldingsTable({ holdings }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Avg Price</th>
          <th>Current Price</th>
        </tr>
      </thead>

      <tbody>
        {holdings.map((stock) => (
          <tr key={stock.symbol}>
            <td>{stock.symbol}</td>
            <td>{stock.quantity}</td>
            <td>{stock.avgPrice}</td>
            <td>{stock.currentPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}