import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../styles/theme";

export type TagStyleProps = 'Realizada' | 'Agendada';

type Props = {
    name: TagStyleProps;
}

export const Tag: React.FC<Props> = ({name}) => {
    return (
        <View 
            style={[
                styles.container, 
                name === 'Realizada' ? styles.containerTagRealizada : styles.containerTagAgendada
            ]}
        >
            <Text style={name === 'Realizada' ? styles.tagTextRealizada : styles.tagTextAgendada}>
                {name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        position: 'absolute',
        top: 12,
        right: 12,

        height: 20,
        borderRadius: 8,

        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTagRealizada: {
        backgroundColor: THEME.COLORS.GREEN_LIGHT,
    },
    containerTagAgendada: {
        backgroundColor: THEME.COLORS.BLUE_LIGHT,
    },
    tagTextRealizada: {
        textTransform: 'uppercase',
        color: THEME.COLORS.GREEN,
        fontSize: THEME.FONT_SIZE.INTER.TAG,
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD
    },
    tagTextAgendada: {
        textTransform: 'uppercase',
        color: THEME.COLORS.BLUE,
        fontSize: THEME.FONT_SIZE.INTER.TAG,
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD
    },
});