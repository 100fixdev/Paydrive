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
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        borderColor: "black",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
});