import React from "react";
import { Outlet } from "react-router-dom";

function Cart() {
  return (
    <>
      <div>Cart</div>
      <Outlet></Outlet>
    </>
  );
}

export default Cart;
