import { Text, View } from "react-native";

import CardBase from "./CardBase";

export default function SimulationCard({ name, productCount, onPress }) {
    return (
        <CardBase onPress={onPress}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>{name}</Text>
            <View style={{marginTop: 4}}>
                <Text style={{ fontSize: 14, color: "#777" }}>productos: {productCount}</Text>
            </View>
        </CardBase>
    );
}