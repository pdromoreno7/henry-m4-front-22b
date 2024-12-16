import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface EcommerceStore {
  cart: any; // Puedes cambiar `any` por el tipo específico de `cart`
  setCart: (data: any) => void; // Cambia `any` por el tipo específico si sabes qué estructura tendrá
  userData: any; // Puedes cambiar `any` por el tipo específico de `userData`
  setUserData: (data: any) => void; // Cambia `any` por el tipo específico si sabes qué estructura tendrá
}
const useUserDataStore = create<EcommerceStore>()(
  devtools(
    persist(
      (set) => ({
        userData: {},
        cart: [],
        setCart: (data) => set({ cart: data }),
        setUserData: (data) => set({ userData: data }),
      }),
      {
        name: "ecommerce-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useUserDataStore;
