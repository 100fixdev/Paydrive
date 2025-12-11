import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import CardBase from "./CardBase";

export default function SimulationCard({ name, productCount, onPress, onDelete }) {
  return (
    <CardBase onPress={onPress} style={styles.outer}>
      <View style={styles.inner}>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text numberOfLines={1} style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>productos: {productCount}</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>{productCount}</Text>
          </View>
        </View>

        {onDelete ? (
          <Pressable
            onPress={onDelete}
            style={({ pressed }) => [styles.deleteBtn, pressed && styles.deleteBtnActive]}
            android_ripple={{ color: "rgba(0,0,0,0.08)", borderless: true }}
          >
            <Text style={styles.deleteText}>✕</Text>
          </Pressable>
        ) : null}
      </View>
    </CardBase>
  );
}

const styles = StyleSheet.create({
  outer: {
    borderColor: "rgba(10,10,30,0.03)",
  },
  inner: {
    width: "100%",
    position: "relative",
    paddingVertical: 6,
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

  deleteBtn: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,94,94,0.95)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ff6b6b",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  deleteBtnActive: {
    transform: [{ scale: 0.96 }],
    opacity: 0.9,
  },
  deleteText: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 16,
  },
});