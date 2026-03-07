export default function Navbar() {
  const navItems = ["Portfolio", "Watchlist", "Market"]
  const title = "Stock Dashboard"
  return (
    <nav>
        <h1>{title}</h1>
      <div>

        {navItems.map((x) =>
          <button key={x}>{x}</button>
        )}
      </div>
    </nav>
  );
}