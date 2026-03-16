import { useState } from "react";

export default function Navbar() {
  const navItems = ["Portfolio", "Watchlist", "Market"];
  const title = "Stock Dashboard";

  const [active, setActive] = useState("Portfolio");

  return (
    <nav className="w-full bg-slate-900 px-8 py-4 flex items-center justify-between">
      <h1 className="text-white text-xl font-bold">
        {title}
      </h1>

      <div className="flex gap-4">
        {navItems.map((x) => (
          <button
            key={x}
            onClick={() => setActive(x)}
            className={`px-4 py-2 rounded-lg text-white transition-colors duration-150 ${active === x ? "bg-slate-700" : "hover:bg-slate-700"}`}
          >
            {x}
          </button>
        ))}
      </div>
    </nav>
  );
}