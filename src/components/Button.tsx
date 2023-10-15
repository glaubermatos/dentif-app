import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { THEME } from "../styles/theme";

type Props = TouchableOpacityProps & {
    title: string;
}

export const Button: React.FC<Props> = ({title, ...rest}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
           
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        borderRadius: 8,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: THEME.COLORS.GREEN
    },
    title: {
        textTransform: 'uppercase',
        fontSize: THEME.FONT_SIZE.INTER.BUTTON,
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD,
        color: THEME.COLORS.WHITE,
    }
});