import React from "react";
import Item from "./Item";
import "./ItemList.css";
export default function ItemList({ productos }) {
    return (
        <div className="galeria">
            {!productos.length && "Loading..."}
            {productos.map((item) => (
                <Item item={item} />
            ))}
        </div>
    );
}