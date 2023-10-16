import { ClockCounterClockwise } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../styles/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

type Props = {
    username: string;
}

export const HomeHeader: React.FC<Props> = ({username}) => {
    const navigation = useNavigation();

    const insets = useSafeAreaInsets();
    const paddingTop = insets.top + 16;

    function handleNavigateToHistorico() {
        navigation.navigate('historico');
    }

    function handleNavigateToCadastro() {
        navigation.navigate('cadastro');
    }

    return (
        <View style={[styles.container, {paddingTop}]}>
            <View style={styles.profile}>
                <Text style={styles.text}>Olá</Text>

                <TouchableOpacity
                    onPress={handleNavigateToCadastro}
                >
                    <Text style={styles.userName}>
                        {username}
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
                onPress={handleNavigateToHistorico}
                style={styles.historicoButton} 
                activeOpacity={0.7}
            >
                <ClockCounterClockwise size={32} color={THEME.COLORS.WHITE} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        paddingBottom: 48,
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
        backgroundColor: THEME.COLORS.GREEN,
        // height: 48,
        // width: 48,
        borderRadius: 8,

        alignItems: 'center',
        justifyContent: 'center'
    }
});