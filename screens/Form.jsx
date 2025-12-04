import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableHighlight,
  Pressable,
  FlatList,} from "react-native";
import icon from "../assets/splash-icon.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Form() {
    const insets = useSafeAreaInsets();

    return(
        <View>
            <Text>Formulario</Text>
            <TextInput placeholder="Ingrese su nombre" style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 5}} />
            <TextInput placeholder="Ingrese su email" style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 5}} />
            <Button title="Enviar" onPress={() => alert('Formulario enviado')} />
            <StatusBar style="auto" />

        </View>
    );
}