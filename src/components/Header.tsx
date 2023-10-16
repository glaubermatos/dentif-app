import { CaretLeft } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {THEME} from '../styles/theme'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string;
}

export const Header: React.FC<Props> = ({title}) => {
    const navigation = useNavigation();

    const insets = useSafeAreaInsets();
    const paddingTop = insets.top + 16;

    return (
        <View style={[styles.container, {paddingTop}]}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
                style={styles.backButton} 
            >
                <CaretLeft size={24} color={THEME.COLORS.WHITE} />
            </TouchableOpacity>

            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.GREEN,

        paddingVertical: 20,
        paddingHorizontal: 24,

        flexDirection: 'row',
        alignItems: 'center',

        position: 'relative'
    },
    backButton: {
        borderRadius: 8,
        justifyContent: 'center',

    },
    title: {
        flex: 1,
        textAlign: 'center',
        color: THEME.COLORS.WHITE,
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD,
        fontSize: THEME.FONT_SIZE.INTER.LG
    }
});