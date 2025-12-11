// screens/Principal.jsx
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SimulationCard from "../components/SimulationCard";
import { useSimulations } from "../context/SimulationsContext";

export function Principal() {
  const navigation = useNavigation();
  const { simulations, addSimulation } = useSimulations();

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
          />
        ))}
      </View>

      <View style={styles.container__agregar}>
        <Pressable style={styles.btn__agregar} onPress={handleAddSimulation}>
          <Text style={styles.txt__agregar}>+</Text>
        </Pressable>
        <Text style={styles.addLabel}>Agregar Simulación</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "linear-gradient", // decorativo: RN no interpreta strings como css-gradients; kept for design note
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
  addLabel: {
    marginTop: 6,
    color: "#374151",
  },
});
