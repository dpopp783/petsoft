import { PetContext } from "@/contexts/pet-context-provider";
import { useContext } from "react";

export function usePetContext() {
  const context = useContext(PetContext);

  if (!context) {
    throw new Error(
      "usePetContext cannot be used outside a PetContextProvider"
    );
  }

  return context;
}
