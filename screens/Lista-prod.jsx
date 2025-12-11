// screens/ListadoProductos.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import ProductCard from "../components/ProductCard";
import FancyButton from "../components/FancyButton";

import { useSimulations } from "../context/SimulationsContext";
import { runSimulation } from "../utils/runSimulation";

export function ListadoProductos() {
  const route = useRoute();
  const navigation = useNavigation();
  const { simulations, saveSimulationResults, removeProductFromSimulation } = useSimulations();

  const { simulationId } = route.params ?? {};
  const simulation = simulations.find((s) => s.id === simulationId);

  // Ahora solo navegamos a la pantalla de loading; esa pantalla hace el delay y la ejecución
  const executeSimulation = (sim) => {
    if (!sim || !sim.id) return;
    navigation.navigate("SimulationLoading", { simulationId: sim.id });
  };

  if (!simulation) {
    return (
      <View style={styles.container__prod}>
        <Text style={{ color: "red" }}>Simulación no encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container__prod}>
      <View style={styles.container__prod_list}>
        <Text style={styles.title}>{simulation.name}</Text>

        <View style={{ alignItems: "center", marginBottom: 10 }}>
          <Text>Lista de productos</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          {simulation.products.length === 0 ? (
            <Text style={{ color: "gray" }}>No hay productos aún</Text>
          ) : (
            simulation.products.map((p) => (
              <ProductCard
                key={p.id ?? p.title}
                title={p.title}
                onPress={() => {}}
                onDelete={() => removeProductFromSimulation(simulation.id, p.id)}
              />
            ))
          )}
        </View>
      </View>

      <View style={styles.container__btn}>
        <FancyButton onPress={() => navigation.navigate("Form", { simulationId: simulation.id })} style={styles.fab}>
          +
        </FancyButton>

        <Text style={styles.label}>Agregar Productos</Text>

        {/* Botón para ejecutar la simulación */}
        <View style={{ marginTop: 16, width: "100%", alignItems: "center" }}>
          <FancyButton onPress={() => executeSimulation(simulation)} style={styles.execBtn}>
            Ejecutar simulación
          </FancyButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container__prod: {
    flex: 1,
    padding: 25,
    backgroundColor: "#f2f2f2",
    justifyContent: "space-between",
    height: "100%",
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 15,
  },
  container__prod_list: {},
  container__btn: {
    alignItems: "center",
    marginTop: 15,
  },
  fab: {
    width: 64,
    height: 64,
    borderRadius: 34,
  },
  execBtn: {
    width: 180,
    height: 48,
    borderRadius: 12,
  },
  label: {
    marginTop: 8,
    color: "#374151",
  },
});
