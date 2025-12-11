import { View, Text, TextInput, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";
import { useSimulations } from "../context/SimulationsContext";
import FancyButton from "../components/FancyButton";

export function Form() {
  const { addProductToSimulation } = useSimulations();
  const route = useRoute();
  const navigation = useNavigation();
  const { simulationId } = route.params;

  const [title, setTitle] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [cost, setCost] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [expectedDemand, setExpectedDemand] = React.useState("");

  const handleSubmit = () => {
    if (title.trim() === "") return;

    addProductToSimulation(simulationId, {
      title: title.trim(),
      quantity: Number(quantity) || 0,
      cost: Number(cost) || 0,
      price: Number(price) || 0,
      expectedDemand: Number(expectedDemand) || 0,
    });

    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <View style={styles.container__form}>
        <Text style={styles.label}>Nombre del Producto</Text>
        <TextInput
          style={styles.input}
          placeholder="EJ: Refrescos, barritas, etc."
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Cantidad</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Cantidad"
          style={styles.input}
          value={quantity}
          onChangeText={setQuantity}
        />

        <Text style={styles.label}>Costo Unitario</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Costo Unitario"
          style={styles.input}
          value={cost}
          onChangeText={setCost}
        />

        <Text style={styles.label}>Precio de Venta</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Precio de Venta"
          style={styles.input}
          value={price}
          onChangeText={setPrice}
        />

        <Text style={styles.label}>Demanda Esperada</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Demanda esperada"
          style={styles.input}
          value={expectedDemand}
          onChangeText={setExpectedDemand}
        />
      </View>

      <View style={styles.buttonWrap}>
        <FancyButton onPress={handleSubmit} style={styles.submitBtn}>
          Guardar Producto
        </FancyButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 18,
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#f2f1e6",
  },
  input: {
    height: 44,
    width: "100%",
    backgroundColor: "white",
    borderColor: "rgba(16,24,40,0.06)",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOpacity: 0.02,
    elevation: 1,
  },
  container__form: {
    flexDirection: "column",
    marginBottom: 20,
  },
  label: {
    marginBottom: 6,
    color: "#374151",
    fontWeight: "600",
  },
  buttonWrap: {
    marginTop: 12,
    alignItems: "center",
  },
  submitBtn: {
    width: 220,
    height: 52,
    borderRadius: 14,
  },
});

/* Estilo antiguo del botón nativo (comentado)
  <Button title="Guardar Producto" onPress={handleSubmit} />
*/
