import { setIndexConfiguration } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { json } from "react-router-dom";
import { cartContext } from "../CartContextComponent";
import { Link } from "react-router-dom";

export default function ItemCount({ product }) {
  const [count, setCount] = useState(1);
  const [remuveButton, setRemuveButton] = useState(false);
  const { cart, addToCart } = useContext(cartContext);
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
    addToCart(product, count);
    setRemuveButton(true);
  }
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <button onClick={sum}>+</button>
      {" " + count + " "}
      <button onClick={res}>-</button>
      <br />
      <br />
      {remuveButton ? (
        <>
          Producto agregado!
          <br />
          <br />
          <Link to="/">[Seguir comprando]</Link> <br />
          <Link to={"/cart"}>[Ver Carrito]</Link>
        </>
      ) : (
        <button onClick={onAdd}>Agregar al Carrito</button>
      )}
    </div>
  );
}
