import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Principal } from "./components/Principal.jsx";
import { ListadoProductos } from "./screens/Lista-prod.jsx";
import { Form } from "./screens/Form.jsx";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SimulationsProvider } from "./context/SimulationsContext.jsx";
import SimulationResultsScreen from "./screens/SimulationResultsScreen.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SimulationsProvider>
      <SafeAreaProvider>
        {/* CONTIENE TODA LA NAVEGACIÓN */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false, // ocultamos los headers para que no cambie tu diseño
            }}
          >
            {/* Pantalla principal donde se ven las simulaciones */}
            <Stack.Screen name="Principal" component={Principal} />

            {/* Pantalla donde se crean simulaciones o productos */}
            <Stack.Screen name="Form" component={Form} />

            {/* Pantalla de listado de productos */}
            <Stack.Screen
              name="ListadoProductos"
              component={ListadoProductos}
            />

            {/* Pantalla de resultados de la simulación */}
            <Stack.Screen
              name="SimulationResults"
              component={SimulationResultsScreen}
            />


          </Stack.Navigator>
        </NavigationContainer>

        <StatusBar style="auto" />
      </SafeAreaProvider>
    </SimulationsProvider>
  );
}

const styles = StyleSheet.create({});
