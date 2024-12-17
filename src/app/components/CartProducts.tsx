"use client";
import { IProduct } from "@/interfaces";
import { createOrderService } from "@/services/ordersServices";
import useUserDataStore from "@/store";
import { Button } from "@nextui-org/react";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function CartProducts() {
  const [totalPrecio, setTotal] = useState(0);
  const { userData, cart, setCart } = useUserDataStore();
  const [isLogging, setIsLogging] = useState(false);

  // Actualiza el total del precio
  useEffect(() => {
    if (cart.length === 0) return;
    let total = 0;
    cart.forEach((product: IProduct) => {
      total += product.price;
    });
    setTotal(total);
  }, [cart]);

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter(
      (product: IProduct) => product.id?.toString() !== productId
    );
    setCart(updatedCart);
  };

  const handleClick = async () => {
    setIsLogging(true);
    const idProducts = cart.map((product: IProduct) => product.id);
    const res = await createOrderService(
      idProducts,
      userData?.user?.id,
      userData.token
    );
    console.log("🚀 ~ handleClick ~ res:", res);

    if (res) {
      toast("Compra realizada con exito", {
        duration: 2000,
        type: "success",
        position: "top-center",
        richColors: true,
      });
      setCart([]);
      setIsLogging(false);
    } else {
      toast("Error al realizar la compra", {
        duration: 2000,
        type: "error",
        position: "top-center",
        richColors: true,
      });
      setIsLogging(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>

      {/* Lista de Productos */}
      {cart.length > 0 ? (
        cart.map((product: IProduct) => (
          <div
            key={product.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-gray-700">${product.price}</p>
              </div>
            </div>
            <Button
              color="danger"
              onClick={() => removeFromCart(product.id?.toString())}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Eliminar
            </Button>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-lg">El carrito está vacío.</p>
      )}

      {/* Resumen del Carrito */}
      {cart.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Resumen</h2>
          <div className="flex justify-between text-lg">
            <span>Total de productos:</span>
            <span>{cart.length}</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span className="text-green-600 text-lg font-bold">
              ${totalPrecio}
            </span>
          </div>
          <Button
            onClick={handleClick}
            color="primary"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2"
          >
            Comprar
            {isLogging && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          </Button>
        </div>
      )}
    </div>
  );
}

export default CartProducts;
