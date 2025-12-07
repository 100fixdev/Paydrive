import { Text } from "react-native";
import CardBase from "./CardBase";

export default function ProductCard({ title, onPress }) {
    return (
        <CardBase onPress={onPress}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
        </CardBase>
    );
}