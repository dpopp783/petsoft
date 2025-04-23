"use client";

import { Pet } from "@/lib/types";
import { useState, createContext } from "react";

type TPetContext = {
  pets: Pet[];
  activePetId: string | null;
  activePet: Pet | undefined;
  petCount: number;
  handleChangeActivePetId: (id: string) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

export default function PetContextProvider({
  data,
  children,
}: PetContextProviderProps) {
  const [activePetId, setActivePetId] = useState<string | null>(null);
  const [pets, setPets] = useState<Pet[]>(data);

  const activePet = pets.find((pet) => pet.id === activePetId);
  const petCount = pets.length;

  const handleChangeActivePetId = (id: string) => {
    setActivePetId(id);
  };

  return (
    <PetContext.Provider
      value={{
        pets,
        activePetId,
        activePet,
        petCount,
        handleChangeActivePetId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
