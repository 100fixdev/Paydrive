import React, { useRef } from "react";
import { Animated, Pressable, Text, StyleSheet, View } from "react-native";

export default function FancyButton({ children, onPress, style }) {
  const scale = useRef(new Animated.Value(1)).current;
  const glow = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.spring(scale, { toValue: 0.96, useNativeDriver: true }).start();
    Animated.timing(glow, { toValue: 1, duration: 220, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, friction: 6, useNativeDriver: true }).start();
    Animated.timing(glow, { toValue: 0, duration: 420, useNativeDriver: true }).start();
  };

  const glowOpacity = glow.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.45],
  });

  return (
    <Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut} style={[styles.container, style]}>
      <Animated.View style={[styles.ambient, { opacity: glowOpacity }]} pointerEvents="none" />
      <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
        <Text style={styles.text}>{children}</Text>
        <View style={styles.fillAccent} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    width: 120,
  },
  ambient: {
    position: "absolute",
    width: 420,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ff6b7a",
    transform: [{ scaleX: 2.6 }],
    shadowColor: "#ff7a9a",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 18,
    elevation: 8,
  },
  button: {
    minWidth: 56,
    paddingHorizontal: 18,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff5a6a",
    overflow: "hidden",
    borderWidth: 0.6,
    borderColor: "rgba(255,255,255,0.24)",
    shadowColor: "#ff5a6a",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 6,
  },
  text: {
    color: "white",
    fontWeight: "800",
    fontSize: 20,
    letterSpacing: 0.4,
  },
  fillAccent: {
    position: "absolute",
    right: -24,
    top: -18,
    width: 72,
    height: 72,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 36,
    transform: [{ rotate: "24deg" }],
  },
});