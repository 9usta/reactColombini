import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useContext } from "react";
import { cartContext } from "../CartContextComponent";
import { Link } from "react-router-dom";
export default function CartWidget() {
  const { totalCount } = useContext(cartContext);

  return (
    <>
      <Link to={"/cart"}>
        <ShoppingCartIcon />
      </Link>

      {totalCount}
    </>
  );
}
