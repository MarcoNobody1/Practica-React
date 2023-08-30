import React from "react";

function GroceryItem(props) {
  function handleClick(name) {
    alert(`${item} added to the cart!`);
  }
  return (<button onClick={() => handleClick(props.name)}>{props.name}</button>);
};

export default GroceryItem;
