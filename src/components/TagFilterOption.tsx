import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { THEME } from "../styles/theme";

export type TagFilterOptionStyleProps = 'Realizada' | 'Agendada';

type Props = TouchableOpacityProps & {
    title: TagFilterOptionStyleProps;
    isActive?: boolean;
}

export const TagFilterOption: React.FC<Props> = ({title, isActive = false, ...rest}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[
                styles.container,
                isActive && {
                    backgroundColor: THEME.COLORS.WHITE
                }
            ]}
            {...rest}
        >
            <Text 
                style={[
                    styles.text,
                    isActive && {
                        color: title === 'Agendada' ? THEME.COLORS.BLUE : THEME.COLORS.GREEN
                    }
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 38,
        backgroundColor: THEME.COLORS.GRAY_100,
        borderRadius: 8,

        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textTransform: 'uppercase',
        color: THEME.COLORS.GRAY_300,
        fontSize: THEME.FONT_SIZE.INTER.SM,
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD
    }
});