// context/SimulationsContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SimulationsContext = createContext(null);

export function SimulationsProvider({ children }) {
  const [simulations, setSimulations] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem("SIMULATIONS_DATA");
        if (json) setSimulations(JSON.parse(json));
      } catch (e) {
        console.warn("Error loading simulations:", e);
      }
    })();
  }, []);

  const persist = async (next) => {
    setSimulations(next);
    try {
      await AsyncStorage.setItem("SIMULATIONS_DATA", JSON.stringify(next));
    } catch (e) {
      console.warn("Error saving simulations:", e);
    }
  };

  const addSimulation = (name = `Simulación ${simulations.length + 1}`) => {
    const newSim = { id: Date.now(), name, products: [], results: null };
    persist([...simulations, newSim]);
    return newSim.id;
  };

  const addProductToSimulation = (simulationId, product) => {
    // Aseguramos que cada producto tenga un id único para poder eliminarlo después.
    const productWithId = { id: product.id ?? Date.now() + Math.floor(Math.random() * 1000), ...product };
    const updated = simulations.map((s) =>
      s.id === simulationId ? { ...s, products: [...s.products, productWithId] } : s
    );
    persist(updated);
  };

  const saveSimulationResults = (simulationId, results) => {
    const updated = simulations.map((s) =>
      s.id === simulationId ? { ...s, results } : s
    );
    persist(updated);
  };

  const removeSimulation = (simulationId) => {
    const updated = simulations.filter((s) => s.id !== simulationId);
    persist(updated);
  };

  const removeProductFromSimulation = (simulationId, productId) => {
    const updated = simulations.map((s) =>
      s.id === simulationId
        ? { ...s, products: s.products.filter((p) => p.id !== productId) }
        : s
    );
    persist(updated);
  };

  return (
    <SimulationsContext.Provider
      value={{
        simulations,
        addSimulation,
        addProductToSimulation,
        saveSimulationResults,
        removeSimulation,
        removeProductFromSimulation,
      }}
    >
      {children}
    </SimulationsContext.Provider>
  );
}

// Hook helper — úsalo en componentes
export function useSimulations() {
  const ctx = useContext(SimulationsContext);
  if (!ctx) {
    throw new Error("useSimulations must be used within SimulationsProvider");
  }
  return ctx;
}

export { SimulationsContext };
