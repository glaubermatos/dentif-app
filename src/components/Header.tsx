import { CaretLeft } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {THEME} from '../styles/theme'

type Props = {
    title: string;
}

export const Header: React.FC<Props> = ({title}) => {
    // const insets = useSafeAreaInsets();
    // const paddingTop = insets.top + 32;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
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

        paddingVertical: 24,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'relative'
    },
    backButton: {
        height: 48,
        width: 48,
        borderRadius: 8,
        justifyContent: 'center',

        position: 'absolute',
        left: 24
    },
    title: {
        color: THEME.COLORS.WHITE,
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD,
        fontSize: THEME.FONT_SIZE.INTER.LG
    }
});