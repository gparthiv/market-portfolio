import { useState } from "react";

export default function AddStockForm({ onAddStock }) {

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
    onAddStock(newStock);

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
        placeholder="Symbol"
        //value= the value ie "" now then onChange ie whenever text changes in textbox it gets renders in ui
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        type="number"
        placeholder="Average Price"
        min="1"
        value={avgPrice}
        onChange={(e) => setAvgPrice(e.target.value.toUpperCase())}
      />

      <button type="submit">
        Add Stock
      </button>

    </form>
  );
}