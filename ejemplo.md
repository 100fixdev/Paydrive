**     <Image source={icon} style={styles.Image} />
      <Text style={{ color: "white" }}>Paydrive esta funcionando </Text>
      <Button
        color="#4e5"
        title="Boton sospechoso"
        onPress={() => alert("Probando alertas")}
      ></Button>
      <TouchableHighlight underlayColor={"#4e5"}>
        <Text>Vamos</Text>
      </TouchableHighlight>
      <Pressable>
        {({ pressed }) => (
          <Text
            style={{
              fontSize: pressed ? 45 : 16,
            }}
          >
            {pressed ? "Boton precionado" : "Boton sin Presionar"}
          </Text>
        )}
      </Pressable>

      **

      fix

      import { NavigationContainer } from "react-navigation/native";
//import Main from "./components/main";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Form } from "./screens/Form.jsx";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Form />
    
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
