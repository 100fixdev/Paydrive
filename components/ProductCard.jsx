import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import CardBase from "./CardBase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProductCard({ title, onPress, onDelete }) {
    return (
        <CardBase onPress={onPress} style={styles.wrapper}>
            <View style={styles.content}>
              <View style={styles.row}>
                <Icon name="cube" size={28} color="#2fbf7f" style={styles.icon} />
                <Text style={styles.title}>{title}</Text>
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
  wrapper: {
    // permite ajustar borde si hace falta desde el padre
  },
  content: {
    width: "100%",
    position: "relative",
    paddingVertical: 6,
    paddingRight: 6,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
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
  deleteBtn: {
    position: "absolute",
    top: -8,
    right: -6,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(255,94,94,0.95)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ff6b6b",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 6,
  },
  deleteBtnActive: {
    transform: [{ scale: 0.96 }],
    opacity: 0.92,
  },
  deleteText: {
    color: "white",
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 14,
  },
});