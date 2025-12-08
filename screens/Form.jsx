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

  const handleSubmit = () => {
    if (title.trim() === "") return;

    addProductToSimulation(simulationId, {
      title,
    });

    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Agregar Producto</Text>

      <TextInput
        style={styles.input}
        placeholder="Título del producto"
        value={title}
        onChangeText={setTitle}
      />


      <View>
          <Text>Detalles de producto</Text>
        </View>

        <View style={styles.container__form}>
          <View>
            <Text>Formulario</Text>
            <TextInput   placeholder="Titulo de Producto" style={styles.input} />
            <TextInput   keyboardType="numeric" placeholder="Cantidad" style={styles.input} />
            <TextInput   keyboardType="numeric" placeholder="Costo Unitario" style={styles.input} />
            <TextInput   keyboardType="numeric" placeholder="Precio de Venta" style={styles.input} />
            <TextInput   keyboardType="numeric" placeholder="Demanda esperada" style={styles.input} />
            <TextInput  placeholder="Detalle de Producto" style={styles.input} />
            <TextInput   keyboardType="numeric" placeholder="Costo Unitario" style={styles.input} />
          </View>

          <View>
            <Text>Politicas de Producto</Text>
            <TextInput  keyboardType="numeric" placeholder="Stock minimo" style={styles.input} />
            <TextInput  keyboardType="numeric" placeholder="Maximo de Producto" style={styles.input} />
            <TextInput  keyboardType="numeric" placeholder="Minimo de Producto" style={styles.input} />
            
          </View>
        </View>

        {/*<Button title="Agregar producto" onPress={() => alert("Formulario enviado")} />*/}

      <Button title="Guardar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
