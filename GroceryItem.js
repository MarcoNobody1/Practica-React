import React from "react";

function GroceryItem(props) {
  return <button onClick={props.onClick}>{props.name}</button>;
}

export default GroceryItem;