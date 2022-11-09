import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { macetas } from "./data";
import "./ItemListContainer.css";

import ItemList from "./ItemList";
export default function ItemListContainer({ greeting }) {
  const { idcategory } = useParams();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(macetas);
      }, 2000);
    });
    productosPromise.then((res) => {
      if (idcategory) {
        setProductos(res.filter((item) => item.category == idcategory));
      } else {
        setProductos(res);
      }
    });
  }, [idcategory]);
  return (
    <div className="container">
      <ItemList productos={productos} />
    </div>
  );
}