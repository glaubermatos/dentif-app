import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../styles/theme";

type Props = {
    title: string;
    subtitle?: string;
}

export const Title: React.FC<Props> = ({title, subtitle}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>

            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    title: {
        fontSize: THEME.FONT_SIZE.INTER.LG,
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD,
        color: THEME.COLORS.GRAY_400,
    },
    subtitle: {
        fontSize: THEME.FONT_SIZE.INTER.SM,
        fontFamily: THEME.FONT_FAMILY.INTER.REGULAR,
        color: THEME.COLORS.GRAY_400,
    }
});