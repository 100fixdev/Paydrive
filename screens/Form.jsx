import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";
import { useSimulations } from "../context/SimulationsContext";

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
        <Text>Nombre del Producto</Text>
        <TextInput
          style={styles.input}
          placeholder="EJ: Refrescos, barritas, etc."
          value={title}
          onChangeText={setTitle}
        />

        <Text>Cantidad</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Cantidad"
          style={styles.input}
          value={quantity}
          onChangeText={setQuantity}
        />

        <Text>Costo Unitario</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Costo Unitario"
          style={styles.input}
          value={cost}
          onChangeText={setCost}
        />

        <Text>Precio de Venta</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Precio de Venta"
          style={styles.input}
          value={price}
          onChangeText={setPrice}
        />

        <Text>Demanda Esperada</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Demanda esperada"
          style={styles.input}
          value={expectedDemand}
          onChangeText={setExpectedDemand}
        />
      </View>

      <Button title="Guardar Producto" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(140, 204, 146, 1)",
  },
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  container__form: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
