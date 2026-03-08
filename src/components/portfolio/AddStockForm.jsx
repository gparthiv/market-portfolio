import { useState } from "react";

export default function AddStockForm({ onAddStock }) {

  //symbol is the value and setSymbol is function to change the state of the value
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [avgPrice, setAvgPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newStock = {
      symbol,
      quantity: Number(quantity),
      avgPrice: Number(avgPrice),
      currentPrice: Number(avgPrice)
    };

    onAddStock(newStock);

    setSymbol("");
    setQuantity("");
    setAvgPrice("");
  }

  return (
    <form onSubmit={handleSubmit}>

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
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        type="number"
        placeholder="Average Price"
        value={avgPrice}
        onChange={(e) => setAvgPrice(e.target.value)}
      />

      <button type="submit">
        Add Stock
      </button>

    </form>
  );
}