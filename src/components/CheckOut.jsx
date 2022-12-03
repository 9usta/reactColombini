import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { cartContext } from "../CartContextComponent";

export default function CheckOut() {
  const { totalToPay, cart, deleteCart, totalCount } = useContext(cartContext);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [orderId, setOrderId] = useState("");

  function validateForm() {
    if (cart.length !== 0) {
      if (email === email2) {
        if (name !== "" && tel !== "" && email !== "" && email2 !== "" && cart.length !== 0) {
          const order = {
            buyer: { name, tel, email },
            totalToPay,
            cart,
          };
          const db = getFirestore();
          const orders = collection(db, "orders");
          addDoc(orders, order).then(({ id }) => {
            setOrderId(id);
            deleteCart();
          });
        } else {
          alert("faltan datos");
        }
      } else {
        alert("El e-mail deve estar bien escrito");
      }
    } else {
      alert("El carro esta vacio");
    }
  }

  return (
    <>
      {orderId ? (
        "Gracias por su compra, su numero de pedido es: " + orderId
      ) : (
        <>
          {cart.map((item) => (
            <div>{item.name + " " + item.count + " "}</div>
          ))}
          <div>
            Tienes en el Carro {totalCount} productos, con un total a pagar de {totalToPay}
          </div>

          <div>
            <h2>Ingrese sus datos</h2>
            <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="tel" placeholder="Telefono" onChange={(e) => setTel(e.target.value)} />
            <br />
            <input type="email" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="email" placeholder="Repita E-Mail" onChange={(e) => setEmail2(e.target.value)} />
            <br />
            <button onClick={validateForm}>Finalizar Compra</button>
          </div>
        </>
      )}
    </>
  );
}
