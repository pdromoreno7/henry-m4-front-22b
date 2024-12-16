"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/index";
import { toast } from "sonner";

import { getProductById } from "@/services/productServices";
import { Button } from "@nextui-org/react";
import useUserDataStore from "@/store";

interface PropsProductDetail {
  id: string;
}

function ProductDetail({ id }: PropsProductDetail) {
  const { userData, cart, setCart } = useUserDataStore();
  console.log("🚀 ~ ProductDetail ~ cart:", cart);

  const [producto, setProducto] = useState<IProduct>();

  const fetchtData = async () => {
    const productResponse = await getProductById(id);
    setProducto(productResponse);
  };

  const addToCart = () => {
    if (userData?.token) {
      const productExist = cart.some(
        (product: IProduct) => product.id === producto?.id
      );
      console.log("🚀 ~ addToCart ~ productExist:", productExist);
      if (!productExist) {
        {
          toast("Producto agregado al carrito");
          setCart([...cart, producto]);
        }
      }
      if (productExist) {
        toast("El producto ya existe en el carrito");
      }
    }
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
      <Button color="primary">Comprar</Button>
      <Button
        id={producto?.id.toString()}
        color="secondary"
        onClick={addToCart}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ProductDetail;
