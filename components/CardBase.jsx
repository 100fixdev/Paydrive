import React, {useRef, useEffect} from "react";
import {View, StyleSheet, Pressable, Animated, Dimensions} from "react-native";
import Svg, {Defs, RadialGradient, Rect, Stop} from "react-native-svg";

const {width} = Dimensions.get("window");

export default function CardBase({children, style, onPress}) {
    const scale = useRef(new Animated.Value(1)).current;
    const glow = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const loop = Animated.loop(
            Animated.sequence([
                Animated.timing(glow, {toValue: 1, duration: 2200, useNativeDriver: true}),
                Animated.timing(glow, {toValue: 0, duration: 2200, useNativeDriver: true}),
            ])
        );
        loop.start();
        return () => loop.stop();
    }, [glow]);

    const handlePressIn = () => {
        Animated.spring(scale, {toValue: 0.985, useNativeDriver: true}).start();
    };
    const handlePressOut = () => {
        Animated.spring(scale, {toValue: 1, friction: 6, useNativeDriver: true}).start();
    };

    const glowOpacity = glow.interpolate({
        inputRange: [0, 1],
        outputRange: [0.06, 0.22],
    });

    return (
        <Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut} style={[styles.wrapper, style]}>
            <Animated.View style={[styles.card, {transform: [{scale}]}]}>
                <Svg style={styles.decor} width={width * 0.92} height={140}>
                    <Defs>
                        <RadialGradient id="g1" cx="35%" cy="20%" rx="60%" ry="60%">
                            <Stop offset="0%" stopColor="#FF8A8A" stopOpacity="0.20"/>
                            <Stop offset="45%" stopColor="#7A6BFF" stopOpacity="0.12"/>
                            <Stop offset="100%" stopColor="#6FFFD6" stopOpacity="0.04"/>
                        </RadialGradient>
                        <RadialGradient id="g2" cx="85%" cy="85%" rx="40%" ry="40%">
                            <Stop offset="0%" stopColor="#00F0FF" stopOpacity="0.10"/>
                            <Stop offset="100%" stopColor="#7A6BFF" stopOpacity="0"/>
                        </RadialGradient>
                    </Defs>

                    <Rect x="0" y="0" width="100%" height="100%" fill="url(#g1)"/>
                    <Rect x="0" y="0" width="100%" height="100%" fill="url(#g2)" opacity="0.8"/>
                </Svg>

                <Animated.View style={[styles.glow, {opacity: glowOpacity}]} pointerEvents="none"/>

                <View style={styles.content}>{children}</View>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        alignItems: "center",
    },
    card: {
        width: "92%",
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "rgba(255,255,255,0.95)",
        borderWidth: 0.5,
        borderColor: "rgba(12,12,30,0.06)",
        marginBottom: 14,
        paddingVertical: 14,
        paddingHorizontal: 14,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#6f5cff",
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 6,
    },
    decor: {
        position: "absolute",
        top: -8,
        left: 0,
        right: 0,
        height: 140,
    },
    glow: {
        position: "absolute",
        top: -10,
        left: "-12%",
        right: "-12%",
        height: 220,
        backgroundColor: "#7a6bff",
        borderRadius: 220,
        transform: [{scaleX: 1.8}],
    },
    content: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

/* Versión anterior (comentada) — se conserva por referencia.
import {View, StyleSheet} from 'react-native';

export default function CardBase({children, style, onPress}) {
    return (
        <View style={[styles.card, style]} onTouchEnd={onPress} onStartShouldSetResponder={onPress ? () => true : undefined} onResponderRelease={onPress}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 15,
        marginBottom: 12,
        padding: 20,
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        borderColor: "black",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
});
*/