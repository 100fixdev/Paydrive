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
import React from "react";



export function Form() {
    const insets = useSafeAreaInsets();
    const [numero, setNumero] = React.useState('');

    const handleCambio = (texto) =>{

        const textoNumerico = texto.replace(/[^0-9]/g, '');
        setNumero(textoNumerico);
    }

    return (
      <View>
        <View>
          <Text>Detalles de producto</Text>
        </View>

        <View style={styles.container__form}>
          <View>
            <Text>Formulario</Text>
            <TextInput   placeholder="Titulo de Producto" style={styles.input} />
            <TextInput  onChange={handleCambio} keyboardType="numeric" placeholder="Cantidad" style={styles.input} />
            <TextInput  onChange={handleCambio} keyboardType="numeric" placeholder="Costo Unitario" style={styles.input} />
            <TextInput  onChange={handleCambio} keyboardType="numeric" placeholder="Precio de Venta" style={styles.input} />
            <TextInput  onChange={handleCambio} keyboardType="numeric" placeholder="Demanda esperada" style={styles.input} />
            <TextInput  placeholder="Detalle de Producto" style={styles.input} />
            <TextInput  onChange={handleCambio} keyboardType="numeric" placeholder="Costo Unitario" style={styles.input} />
          </View>

          <View>
            <Text>Politicas de Producto</Text>
            <TextInput onChange={handleCambio} keyboardType="numeric" placeholder="Stock minimo" style={styles.input} />
            <TextInput onChange={handleCambio} keyboardType="numeric" placeholder="Maximo de Producto" style={styles.input} />
            <TextInput onChange={handleCambio} keyboardType="numeric" placeholder="Minimo de Producto" style={styles.input} />
            
          </View>
        </View>

        <Button title="Agregar producto" onPress={() => alert("Formulario enviado")} />
        <StatusBar style="auto" />
      </View>
    );
}
    
const styles = StyleSheet.create({
    input:{
        height: 40,
        width: 250,
        backgroundColor:'white',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 5
    }
});