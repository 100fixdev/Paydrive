import react from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function ListadoProductos() {
  return (
    <View style={styles.container__prod}>
      <Text style={styles.title}>Listado de Productos</Text>
      {/* Aquí iría la lógica para listar los productos */}
      <View style={styles.container__item}>
        <Text>Producto 1</Text>
      </View>
      <View style={styles.container__btn}>
          <Pressable style={styles.btn__agregar}>
            <Text style={styles.txt__agregar}>+</Text>
        </Pressable>
      </View>
    </View>

    
  );
}

export const styles = StyleSheet.create({
  container__prod: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 15,
  },
  container__item: {
    backgroundColor: '#f74',
    height: '75%',
  },
  btn__agregar: {
    backgroundColor: 'rgba(68, 152, 221, 1)',
    borderRadius: 50,
    width: 50,
  },
    txt__agregar: {
        fontSize:18,
        color: 'white',
        textAlign: 'center',
        
    },
    container__btn:{
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 20,
        marginTop: 10,
    }
});

