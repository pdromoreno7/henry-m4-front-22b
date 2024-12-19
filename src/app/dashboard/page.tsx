"use client";
import useUserDataStore from "@/store";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { getOrdersService } from "@/services/ordersServices";
import { OrderType } from "@/interfaces";

function Page() {
  const [orders, setOrders] = useState([]);
  const { userData } = useUserDataStore();
  const router = useRouter();

  const goToCart = () => {
    router.push("/cart");
  };

  const getOrders = async () => {
    const res = await getOrdersService(userData.token);
    setOrders(res);
  };

  useEffect(() => {
    if (!userData?.token) return;
    getOrders();
  }, [userData]);

  return (
    <div className="max-w-4xl mx-auto my-10 px-4 py-8">
      {/* Encabezado */}
      <header className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-4xl font-bold text-gray-800">Perfil</h1>
        <Button
          onClick={goToCart}
          className="bg-yellow-500  text-white px-6 py-2 rounded-md transition"
        >
          Carrito
        </Button>
      </header>

      {/* Información del Usuario */}
      <main className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold">Nombre:</h2>
          <p className="text-lg">{userData?.user?.name || "N/A"}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Correo Electrónico:</h2>
          <p className="text-lg">{userData?.user?.email || "N/A"}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Dirección:</h2>
          <p className="text-lg">{userData?.user?.address || "N/A"}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Teléfono:</h2>
          <p className="text-lg">{userData?.user?.phone || "N/A"}</p>
        </div>
      </main>
      <section>
        <h2 className="text-2xl font-bold mb-4">Mis Compras</h2>
        <div>
          {orders.map((order: OrderType) => (
            <div key={order.id} className="border p-4 mb-4">
              <h3 className="text-lg font-semibold">Orden #{order.id}</h3>
              <p>Fecha: {order.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
