import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { macetas } from "./data";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer({ greeting }) {
    const { iditem } = useParams();
    const [producto, setProducto] = useState({});
    useEffect(() => {
        const productoPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(macetas.find((item) => item.id == iditem));
            }, 2000);
        });
        productoPromise.then((res) => {
            setProducto(res);
        });
    }, [iditem]);
    return (
        <div className="container">
            <ItemDetail producto={producto} />
        </div>
    );
}
