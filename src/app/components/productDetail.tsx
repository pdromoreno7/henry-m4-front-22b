"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/index";

import { getProductById } from "@/services/productServices";

interface PropsProductDetail {
  id: string;
}

function ProductDetail({ id }: PropsProductDetail) {
  const [producto, setProducto] = useState<IProduct>();
  console.log("🚀 ~ ProductDetail ~ producto:", producto);

  const fetchtData = async () => {
    const productResponse = await getProductById(id);
    setProducto(productResponse);
  };

  useEffect(() => {
    fetchtData();
  }, []);
  return (
    <div>
      <h1>{producto?.name}</h1>
      <p>{producto?.description}</p>
      <img src={producto?.image} alt={producto?.name} />
      <p>{producto?.price}</p>
    </div>
  );
}

export default ProductDetail;
