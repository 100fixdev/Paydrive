import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
} from "react-native";
import { Main } from "./components/Main.jsx";
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default function App() {


  return (<SafeAreaProvider>
    <View style={styles.container}>
      <Main />
      <StatusBar style="auto" />
    </View>
  </SafeAreaProvider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(68, 152, 221, 1)",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:12,
    paddingHorizontal:12
  },
});
