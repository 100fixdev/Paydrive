import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Pressable,
} from "react-native";
import icon from "./assets/splash-icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={{
          width: 100,
          height: 100,
          resizeMode: "center",
        }}
      />
      <Text style={{ color: "white" }}>Paydrive esta funcionando!</Text>
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(68, 152, 221, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
});
