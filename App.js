import React from "react";
import GroceryItem from "./GroceryItem";

function App() {
  function handleCLick() {
    alert(`${props.name} added to the list`);
  }
  return (
    <div>
      <GroceryItem name="Eggs" onClick={handleClick} />
      <GroceryItem name="Banana" onClick={handleClick} />
      <GroceryItem name="Strawberry" onClick={handleClick} />
      <GroceryItem name="Bread" onClick={handleClick} />
    </div>
  );
}

export default App;
