import React, { useContext } from "react";
import { cartContext } from "../CartContextComponent";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, totalCount, totalToPay, deleteFromCart } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <>
        <h2>El Carrito esta vacio</h2>
        <Link to="/">[Seguir comprando]</Link>
      </>
    );
  } else {
    return (
      <>
        {cart.map((item) => (
          <div>
            {item.name + " " + item.count + " "}
            <span onClick={() => deleteFromCart(item.id)}>
              {" "}
              <DeleteForeverIcon />
            </span>
          </div>
        ))}
        <div>
          Tienes en el Carro {totalCount} productos, con un total a pagar de {totalToPay}
          <br />
          <Link to={"/checkout"}>Despachar Pedido</Link>
        </div>
      </>
    );
  }
}
