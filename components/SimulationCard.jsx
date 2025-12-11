import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CardBase from "./CardBase";

export default function SimulationCard({ name, productCount, onPress }) {
  return (
    <CardBase onPress={onPress} style={styles.outer}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Text numberOfLines={1} style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>productos: {productCount}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{productCount}</Text>
        </View>
      </View>
    </CardBase>
  );
}

const styles = StyleSheet.create({
  outer: {
    borderColor: "rgba(10,10,30,0.03)",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0b1020",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    color: "#6b7280",
  },
  badge: {
    minWidth: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8a6bff",
    shadowColor: "#8a6bff",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 5,
  },
  badgeText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
});