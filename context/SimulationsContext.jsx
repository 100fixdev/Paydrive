import React, { createContext, useState, useContext } from "react";

const SimulationsContext = createContext();

export function SimulationsProvider({ children }) {
  const [simulations, setSimulations] = useState([]);

  // Crear una simulación nueva
  const addSimulation = () => {
    const newSimulation = {
      id: Date.now(),
      name: "Simulación " + (simulations.length + 1),
      products: [],
    };

    setSimulations([...simulations, newSimulation]);
    return newSimulation.id;
  };

  // Agregar un producto a una simulación específica
  const addProductToSimulation = (simulationId, product) => {
    setSimulations((prev) =>
      prev.map((sim) =>
        sim.id === simulationId
          ? { ...sim, products: [...sim.products, product] }
          : sim
      )
    );
  };

  return (
    <SimulationsContext.Provider
      value={{ simulations, addSimulation, addProductToSimulation }}
    >
      {children}
    </SimulationsContext.Provider>
  );
}

export const useSimulations = () => useContext(SimulationsContext);
