import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
export default function Item({ item }) {
    return (
        <div className="card" >
            <div className="card_art">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
            </div>

            <p>{"$" + item.price}</p>
            <Link to={"/item/" + item.id} className="ver">Ver Producto</Link>
        </div>
    );
}