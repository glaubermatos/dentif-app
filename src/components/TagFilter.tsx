import { StyleSheet, View } from "react-native";
import { THEME } from "../styles/theme";
import { TagFilterOption } from "./TagFilterOption";

export const TagFilter = () => {
    return (
        <View style={styles.container}>
            <TagFilterOption title="Agendada"  />
            <TagFilterOption title="Realizada" isActive />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: THEME.COLORS.GRAY_100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: THEME.COLORS.GRAY_200,

        flexDirection: 'row',
        gap: 8,

    }
});