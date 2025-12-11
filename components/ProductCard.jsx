import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CardBase from "./CardBase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProductCard({ title, onPress }) {
    return (
        <CardBase onPress={onPress} style={styles.wrapper}>
            <View style={styles.row}>
              <Icon name="cube" size={28} color="#2fbf7f" style={styles.icon} />
              <Text style={styles.title}>{title}</Text>
            </View>
        </CardBase>
    );
}

const styles = StyleSheet.create({
  wrapper: {
    // permite ajustar borde si hace falta desde el padre
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12, // RN >= 0.71 soporta gap, si no lo tiene, usa paddingRight en icono
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#122028",
  },
});