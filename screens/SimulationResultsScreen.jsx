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
        <View style={styles.card}>
          <Text style={styles.metricLabel}>Ganancia</Text>
          <Text style={styles.metricValue}>${profit}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.metricLabel}>Unidades vendidas</Text>
          <Text style={styles.metricValue}>{soldUnits}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.metricLabel}>Costo de inventario</Text>
          <Text style={styles.metricValue}>${inventoryCost}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: "#fffefe" },
  title: { fontSize: 22, fontWeight: "800", marginBottom: 18, color: "#0b1220" },
  metrics: { gap: 12 },
  card: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    borderColor: "rgba(12,18,32,0.04)",
    borderWidth: 0.6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 18,
    elevation: 3,
  },
  metricLabel: { color: "#6b7280", fontSize: 13, marginBottom: 6 },
  metricValue: { fontSize: 18, fontWeight: "700", color: "#111827" },
});
