import { ClockCounterClockwise } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../styles/theme";

export const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Text style={styles.text}>Olá</Text>
                <Text style={styles.userName}>Glauber Matos</Text>
            </View>

            <TouchableOpacity style={styles.historicoButton} activeOpacity={0.7}>
                <ClockCounterClockwise size={32} color={THEME.COLORS.WHITE} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        backgroundColor: THEME.COLORS.GREEN,

        flexDirection: 'row',
        alignItems: 'center',
    },
    profile: {
        flex:1
    },
    text: {
        color: THEME.COLORS.WHITE,
        fontSize: THEME.FONT_SIZE.INTER.LG,
        fontFamily: THEME.FONT_FAMILY.INTER.REGULAR
    },
    userName: {
        color: THEME.COLORS.WHITE,
        fontSize: THEME.FONT_SIZE.INTER.LG,
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD
    },
    historicoButton: {
        height: 48,
        width: 48,
        borderRadius: 8,

        alignItems: 'center',
        justifyContent: 'center'
    }
});