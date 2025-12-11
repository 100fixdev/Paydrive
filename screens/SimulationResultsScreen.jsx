// screens/SimulationResultsScreen.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSimulations } from "../context/SimulationsContext";

export default function SimulationResultsScreen({ route }) {
  const { simulationId } = route.params ?? {};
  const { simulations } = useSimulations();

  const simulation = simulations.find((s) => s.id === simulationId);

  if (!simulation || !simulation.results) {
    return (
      <View style={styles.container}>
        <Text>No hay resultados para esta simulación.</Text>
      </View>
    );
  }

  const { profit, soldUnits, inventoryCost } = simulation.results;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{simulation.name} - Resultados</Text>

      <View style={styles.metrics}>
        <Text style={styles.metric}>Ganancia: ${profit}</Text>
        <Text style={styles.metric}>Unidades vendidas: {soldUnits}</Text>
        <Text style={styles.metric}>Costo de inventario: ${inventoryCost}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  metrics: { marginBottom: 20 },
  metric: { fontSize: 16, marginBottom: 5 },
});
