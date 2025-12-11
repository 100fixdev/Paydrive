import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSimulations } from "../context/SimulationsContext";
import { runSimulation } from "../utils/runSimulation";

export default function SimulationLoading() {
  const route = useRoute();
  const navigation = useNavigation();
  const { simulationId } = route.params ?? {};
  const { simulations, saveSimulationResults } = useSimulations();

  const simulation = simulations.find((s) => s.id === simulationId);

  // Spinner animation
  const rotate = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 1400,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    spin.start();
    return () => spin.stop();
  }, [rotate]);

  useEffect(() => {
    // Si no existe la simulación, volvemos atrás rápido
    if (!simulation) {
      navigation.goBack();
      return;
    }

    // Esperamos 5s para mostrar loader, después ejecutamos y navegamos
    const t = setTimeout(() => {
      try {
        const results = runSimulation(simulation.products || []);
        saveSimulationResults(simulation.id, results);
        // Reemplaza la pantalla de loading por la de resultados
        navigation.replace("SimulationResults", { simulationId: simulation.id });
      } catch (e) {
        console.warn("Error generando simulación:", e);
        navigation.goBack();
      }
    }, 5000);

    return () => clearTimeout(t);
  }, [simulation, navigation, saveSimulationResults]);

  const spinInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.orb, { transform: [{ rotate: spinInterpolate }] }]}>
        <View style={styles.innerOrb} />
      </Animated.View>

      <Text style={styles.title}>Generando simulación</Text>
      <Text style={styles.subtitle}>Aplicando Calculos para ver resultados...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f5ef",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  orb: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: "rgba(138,107,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    shadowColor: "#8a6bff",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
  innerOrb: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#8a6bff",
    opacity: 0.95,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0b1220",
    marginBottom: 6,
  },
  subtitle: {
    color: "#6b7280",
  },
});