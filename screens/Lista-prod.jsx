import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSimulations } from "../context/SimulationsContext";
import ProductCard from "../components/ProductCard";

export function ListadoProductos() {
  const route = useRoute();
  const navigation = useNavigation();
  const { simulations } = useSimulations();

  const { simulationId } = route.params;
  const simulation = simulations.find((s) => s.id === simulationId);

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
            simulation.products.map((p, index) => (
              <ProductCard key={index} title={p.title} onPress={() => {}} />
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
  container__prod_list: {
    
  },
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
  },
});
