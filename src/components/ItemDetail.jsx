import React from "react";
import ejImg from "../images/1-bonasi-rec-blanca.webp";
import "./ItemDetail.css";
export default function productoDetail({ producto }) {
    return (
        <div>
            {producto.id ? (<>
                <div className="vistaProd" key={producto.id}>
                    <img src={ejImg} alt="example" />
                    <aside>
                        <h3>{producto.id}</h3>
                        <p>{"Largo: " + producto.largo + " cm"}</p>
                        <p>{"Ancho: " + producto.ancho + " cm"}</p>
                        <p>{"Profundidad: " + producto.prof + " cm"}</p>
                        <br />
                        <p>{"$" + producto.precio}</p>
                    </aside>
                </div>
            </>) : <>Loading...</>}
        </div>
    );
}