import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
//import { Main } from "./components/Main.jsx";
import { Principal } from "./components/Principal.jsx";
import { ListadoProductos } from "./screens/Lista-prod.jsx";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Form } from "./screens/Form.jsx";
import { SimulationsProvider } from "./context/SimulationsContext.jsx";

export default function App() {
  return (
    <SimulationsProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Form />
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    </SimulationsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(68, 152, 221, 1)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
