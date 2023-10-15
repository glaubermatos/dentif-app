import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { THEME } from "../styles/theme";

type Props = TextInputProps & {}

export const Input: React.FC<Props> = ({...rest}) => {
    return (
        <TextInput 
            style={styles.container}
            placeholderTextColor={THEME.COLORS.GRAY_300}
            {...rest} 
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height: 56,

        backgroundColor: THEME.COLORS.GRAY_100,
        borderColor: THEME.COLORS.GRAY_200,
        borderWidth: 1,
        borderRadius: 8,
        color: THEME.COLORS.GRAY_500,

        paddingHorizontal: 16,

        fontSize: THEME.FONT_SIZE.INTER.LG
    }
});