import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Pressable,
  ScrollView
} from "react-native";
import icon from "../assets/splash-icon.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export function Main() {
const insets = useSafeAreaInsets();

  return (
    <View style={[{paddingTop: insets.top}, {paddingBottom: insets.bottom}]}>
    <ScrollView>
      <Image
        source={icon}
        style={styles.Image}
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
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 100,
    height: 100,
    resizeMode: "center",
  },
});
