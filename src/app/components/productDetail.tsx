"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/index";
import { toast } from "sonner";

import { getProductById } from "@/services/productServices";
import { Button } from "@nextui-org/react";
import useUserDataStore from "@/store";
import { Loader2 } from "lucide-react";

interface PropsProductDetail {
  id: string;
}

function ProductDetail({ id }: PropsProductDetail) {
  const { userData, cart, setCart } = useUserDataStore();
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

      if (!productExist) {
        toast("Producto agregado al carrito", {
          duration: 2000,
          type: "success",
          position: "top-center",
          richColors: true,
        });
        setCart([...cart, producto]);
      } else {
        toast("El producto ya existe en el carrito", {
          duration: 2000,
          type: "info",
          position: "top-center",
          richColors: true,
        });
      }
    } else {
      toast("Debes iniciar sesión para agregar productos al carrito");
    }
  };

  useEffect(() => {
    fetchtData();
  }, []);

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {producto ? (
        <>
          <img
            src={producto.image}
            alt={producto.name}
            className="w-full h-64 object-contain rounded-md mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {producto.name}
          </h1>
          <p className="text-gray-600 mb-4">{producto.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-6">
            ${producto.price}
          </p>
          <div className="flex gap-4">
            <Button
              color="primary"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
            >
              Comprar
            </Button>
            <Button
              id={producto.id.toString()}
              onClick={addToCart}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-md"
            >
              Agregar al carrito
            </Button>
          </div>
        </>
      ) : (
        <Loader2 className="mr-2 h-9 w-9 animate-spin" />
      )}
    </div>
  );
}

export default ProductDetail;
