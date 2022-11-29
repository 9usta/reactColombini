import React, { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../App";

export default function ItemCount({ product }) {
  const [count, setCount] = useState(1);
  const {cart} = useContext(cartContext);
  function sum() {
    if (count < product.stock) {
      setCount(count + 1);
    }
  }
  function res() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }
function onAdd() {
    
}


  return (
    <div>
      <button onClick={sum}>+</button>
      {count}
      <button onClick={res}>-</button>
      <br />
      <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  );
}
