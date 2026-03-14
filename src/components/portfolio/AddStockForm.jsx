import { useState } from "react";
import { usePortfolio } from "../../context/usePortfolio"

export default function AddStockForm() {
  const { handleAddStock } = usePortfolio()
  //symbol is the value and setSymbol is function to change the state of the value
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [avgPrice, setAvgPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!symbol.trim() || !quantity || !avgPrice) {
      setErrorMessage("Please fill all fields");
      return;
    }

    if (quantity <= 0 || avgPrice <= 0) {
      setErrorMessage("Quantity and Price must be greater than 0");
      return;
    }

    const newStock = {
      id: Date.now(),
      symbol,
      quantity: Number(quantity),
      avgPrice: Number(avgPrice),
      currentPrice: Number(avgPrice)
    };

    setErrorMessage("");
    handleAddStock(newStock);

    setSymbol("");
    setQuantity("");
    setAvgPrice("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <h3>Add Stock</h3>

      <input
        type="text"
        maxLength={10}
        placeholder="Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.replace(/[^A-Z0-9]/gi, "").toUpperCase())}
      />

      <input
        type="number"
        placeholder="Quantity"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        type="text"
        placeholder="Average Price"
        value={avgPrice}
        onChange={(e) => setAvgPrice(e.target.value.replace(/[^0-9.]/g, ""))}
      />

      <button type="submit">
        Add Stock
      </button>

    </form>
  );
}