import { Text } from "react-native";
import CardBase from "./CardBase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProductCard({ title, onPress }) {
    return (
        <CardBase onPress={onPress}>
            <Icon name="cube" size={27} color="green" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
        </CardBase>
    );
}