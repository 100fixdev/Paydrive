// screens/ListadoProductos.jsx
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import ProductCard from "../components/ProductCard";

import { useSimulations } from "../context/SimulationsContext";
import { runSimulation } from "../utils/runSimulation";

export function ListadoProductos() {
  const route = useRoute();
  const navigation = useNavigation();
  const { simulations, saveSimulationResults } = useSimulations();

  const { simulationId } = route.params ?? {};
  const simulation = simulations.find((s) => s.id === simulationId);

  const executeSimulation = (sim) => {
    if (!sim || !sim.products) return;
    const results = runSimulation(sim.products);
    saveSimulationResults(sim.id, results);
    navigation.navigate("SimulationResults", { simulationId: sim.id });
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
              <ProductCard key={p.id ?? p.title} title={p.title} onPress={() => {}} />
            ))
          )}
        </View>
      </View>

      <View style={styles.container__btn}>
        <Pressable
          style={styles.btn__agregar}
          onPress={() =>
            navigation.navigate("Form", { simulationId: simulation.id })
          }
        >
          <Text style={styles.txt__agregar}>+</Text>
        </Pressable>

        <Text>Agregar Productos</Text>

        {/* Botón para ejecutar la simulación */}
        <View style={{ marginTop: 16, width: "100%", alignItems: "center" }}>
          <Pressable
            style={[styles.btn__agregar, { width: 160, height: 44, borderRadius: 8 }]}
            onPress={() => executeSimulation(simulation)}
          >
            <Text style={[styles.txt__agregar, { fontSize: 18 }]}>
              Ejecutar simulación
            </Text>
          </Pressable>
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
  btn__agregar: {
    backgroundColor: "rgba(38,112,221,1)",
    borderRadius: 80,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  txt__agregar: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
