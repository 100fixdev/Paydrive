// screens/Principal.jsx
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SimulationCard from "../components/SimulationCard";
import { useSimulations } from "../context/SimulationsContext";
import FancyButton from "./FancyButton";

export function Principal() {
  const navigation = useNavigation();
  const { simulations, addSimulation, removeSimulation } = useSimulations();

  const handleAddSimulation = () => {
    const newId = addSimulation();
    navigation.navigate("ListadoProductos", { simulationId: newId });
  };

  return (
    <View style={styles.body}>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Mis simulaciones</Text>
        {simulations.map((sim) => (
          <SimulationCard
            key={sim.id}
            name={sim.name}
            productCount={sim.products.length}
            onPress={() =>
              navigation.navigate("ListadoProductos", { simulationId: sim.id })
            }
            onDelete={() => removeSimulation(sim.id)}
          />
        ))}
      </View>

      <View style={styles.container__agregar}>
        <FancyButton onPress={handleAddSimulation} style={styles.addBtn}>+</FancyButton>
        <Text style={styles.addLabel}>Agregar Simulación</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#f6f5ef",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 36,
    paddingBottom: 28,
    width: "100%",
  },
  listContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
    fontWeight: "800",
    color: "#0f1724",
  },
  container__agregar: {
    alignItems: "center",
    marginTop: 12,
  },
  addBtn: {
    // tamaño y colores del botón principal (puedes ajustarlo)
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  addLabel: {
    marginTop: 6,
    color: "#374151",
  },
});

/* Estilos antiguos (comentados por referencia)
  btn__agregar: {
    backgroundColor: "#ff5a6a",
    borderRadius: 50,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ff5a6a",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 6,
  },
  txt__agregar: {
    color: "white",
    fontSize: 38,
    lineHeight: 38,
    fontWeight: "700",
  },
*/
