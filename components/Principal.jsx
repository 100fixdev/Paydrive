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
    // addSimulation ahora devuelve el id
    const newId = addSimulation(); // nombre opcional
    navigation.navigate("ListadoProductos", {
      simulationId: newId,
    });
  };

  return (
    <View style={styles.body}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text style={styles.title}>Mis simulaciones</Text>
        {simulations.map((sim) => (
          <SimulationCard
            key={sim.id}
            name={sim.name}
            productCount={sim.products.length}
            onPress={() =>
              navigation.navigate("ListadoProductos", {
                simulationId: sim.id,
              })
            }
          />
        ))}
      </View>

      <View style={styles.container__agregar}>
        <Pressable style={styles.btn__agregar} onPress={handleAddSimulation}>
          <Text style={styles.txt__agregar}>+</Text>
        </Pressable>
        <Text>Agregar Simulación</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "rgba(206, 157, 51, 1)",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 40,
    paddingBottom: 40,
    width: "100%",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },
  container__agregar: {
    alignItems: "center",
    marginTop: 20,
  },
  btn__agregar: {
    backgroundColor: "crimson",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  txt__agregar: {
    color: "white",
    fontSize: 40,
  },
});
