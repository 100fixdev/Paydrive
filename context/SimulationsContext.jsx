import { createContext, useState } from "react";

export const SimulationsContext = createContext();

export function SimulationsProvider({ children }) {
    const [simulations, setSimulations] = useState([]);

    function addSimulation(name){
        const newSimulation = { id: Date.now(), name, products: [] };

        setSimulations(prev => [...prev, newSimulation]);
    }

    function addProductToSimulation(simulationId, product){
        setSimulations(prev => prev.map(sim => sim.id === simulationId ? { ...sim, products: [...sim.products, product] } : sim));

    }

    return(
        <SimulationsContext.Provider value={{ simulations, addSimulation, addProductToSimulation }}>
            {children}
        </SimulationsContext.Provider>
    );
}


