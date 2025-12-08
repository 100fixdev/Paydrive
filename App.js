import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Navegación
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Contexto global
import { SimulationsProvider } from "./context/SimulationsContext.jsx";

// Tus pantallas
import { Principal } from "./components/Principal.jsx"; // lista de simulaciones
import { ListadoProductos } from "./screens/Lista-prod.jsx"; // productos de una simulación
import { Form } from "./screens/Form.jsx"; // formulario para agregar producto

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SimulationsProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen
              name="Principal"
              component={Principal}
              options={{ title: "Simulaciones" }}
            />

            <Stack.Screen
              name="ListadoProductos"
              component={ListadoProductos}
              options={{ title: "Productos" }}
            />

            <Stack.Screen
              name="Form"
              component={Form}
              options={{ title: "Agregar Producto" }}
            />

          </Stack.Navigator>

          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaProvider>
    </SimulationsProvider>
  );
}
