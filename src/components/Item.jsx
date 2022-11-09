import React from "react";
import { Link } from "react-router-dom";
import ejImg from "../images/1-bonasi-rec-blanca.webp";
import "./Item.css";
export default function Item({ item }) {
    return (
        <div className="card" key={item.id}>
            <div className="card_art">
                <img src={ejImg} alt="example" />
                <h3>{item.id}</h3>
            </div>
            <p>{item.largo + "x" + item.ancho + "x" + item.prof + "cm"}</p>
            <p>{"$" + item.precio}</p>
            <Link to={"/item/" + item.id} className="ver">Ver Producto</Link>
        </div>
    );
}