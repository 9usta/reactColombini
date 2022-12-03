import React from "react";
import Item from "./Item";
import "./ItemList.css";
export default function ItemList({ products }) {
  return (
    <div className="galeria">
      {!products.length && "Loading..."}
      {products.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
