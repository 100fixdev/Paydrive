import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Pressable,
  FlatList,
} from "react-native";
import icon from "../assets/splash-icon.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Main() {
  const insets = useSafeAreaInsets();

  return (
    
    <View style={styles.body}>
      <View style={styles.container__card}>
      <Text style={styles.title}>Mis Simulaciones</Text>

        <View style={styles.card}>
          <Pressable>
            <Text>Simulacion X</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.container__agregar}>
        <Pressable style={styles.btn__agregar}>
          <Text style={styles.txt__agregar}>+</Text>
        </Pressable>
        <Text>Agregar Simulacion</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  
  body: {
    flex: 1,
    backgroundColor: "rgba(206, 157, 51, 1)",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container__card:{
    width: "100%",
    alignItems: "center",
  },
  Image: {
    width: 100,
    height: 100,
    resizeMode: "center",
  },
  card:{
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    borderWidth: 2,
    borderColor: "black",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",

  },
  container__agregar:{
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "green",
  },
  btn__agregar:{
    backgroundColor: "crimson",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  txt__agregar:{
    color: "white",
    fontSize: 40,
  },
});
