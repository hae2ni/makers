import { create } from "zustand";

interface CityStoreType {
  city: string;
  setCity: (newCity: string) => void;
}

export const useCityStore = create<CityStoreType>((set) => ({
  city: "Seoul",
  setCity: (newCity) => set({ city: newCity }),
}));
