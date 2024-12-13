import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface EcommerceStore {
  userData: any; // Puedes cambiar `any` por el tipo específico de `userData`
  setUserData: (data: any) => void; // Cambia `any` por el tipo específico si sabes qué estructura tendrá
}
const useUserDataStore = create<EcommerceStore>()(
  devtools(
    persist(
      (set) => ({
        userData: null,
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
