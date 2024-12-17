import { IProduct, UserType } from "@/interfaces";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface UserDataType {
  login: boolean;
  user: UserType;
  token: string;
}

interface EcommerceStore {
  cart: IProduct[];
  setCart: (data: IProduct[]) => void;
  userData: UserDataType;
  setUserData: (data: UserDataType) => void;
}
const useUserDataStore = create<EcommerceStore>()(
  devtools(
    persist(
      (set) => ({
        userData: {
          login: false,
          user: {
            name: "",
            email: "",
            password: "",
            address: "",
            phone: "",
          },
          token: "",
        },
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
