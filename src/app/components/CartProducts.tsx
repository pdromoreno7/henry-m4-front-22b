"use client";
import { IProduct } from "@/interfaces";
import useUserDataStore from "@/store";
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

function CartProducts() {
  const [totalPrecio, setTotal] = useState(0);
  const { cart } = useUserDataStore();

  useEffect(() => {
    if (cart.length === 0) return;

    let total = 0;
    cart.forEach((product: IProduct) => {
      total += product.price;
    });
    setTotal(total);
  }, [cart]);

  return (
    <div>
      {cart.map((product: IProduct) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
      <div>
        <h2>total Product</h2>
        <p>{cart.length}</p>
      </div>
      <div>
        <h2>total</h2>
        <p>{totalPrecio}</p>
      </div>

      <Button color="primary">Comprar</Button>
    </div>
  );
}

export default CartProducts;
