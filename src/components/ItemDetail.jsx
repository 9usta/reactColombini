import React from "react";
import "./ItemDetail.css";
import ItemCount from "./ItemCount";

export default function ItemDetail({product}) {
  return (
        <>
          <div className="vistaProd" key={product.id}>
            <img src={product.image} alt={product.name} />
            <aside>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <br />
{/*               <p>{"Largo: " + (product?.size[0])+ " cm"}</p>
              <p>{"Ancho: " + (product?.size[1])  + " cm"}</p>
              <p>{"Profundidad: " + (product?.size[2])  + " cm"}</p> */}
              <br />
              <p>{"$" + product.price}</p>
              <br />
              <br />
              <p>{"Stock: " + product.stock}</p>
              <br />
              <ItemCount product={product}/>


           
            </aside>
          </div>
        </>
  );
}
