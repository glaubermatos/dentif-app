import { CaretRight, IconProps } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { THEME } from "../styles/theme";

export type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = TouchableOpacityProps & {
    specialty?: string,
    icon: IconBoxProps,
    professionalName: string;
    activeClick?: boolean;
}

export const Specialty: React.FC<Props> = ({specialty, icon: Icon, professionalName, activeClick = false, ...rest}) => {
    return (
        <TouchableOpacity 
            activeOpacity={activeClick ? 0.7 : 1}
            style={[styles.container, activeClick && styles.containerWithBorder]}
            {...rest}
        >
            <View style={styles.iconContainer}>
                <Icon size={24} color={THEME.COLORS.BLUE} />
            </View>

            <View style={styles.specialtyContainer}>
                {
                    specialty && (
                        <Text style={styles.specialty}>
                            {specialty}
                        </Text>                     
                    )
                }

                <Text style={styles.professionalName}>
                    {professionalName}
                </Text>
            </View>

            {
                activeClick && (
                    <CaretRight size={16} color={THEME.COLORS.BLUE} />
                )
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        backgroundColor: THEME.COLORS.GRAY_100,

        flexDirection: 'row',
        alignItems: 'center'
    },
    containerWithBorder: {
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: THEME.COLORS.GRAY_200,
    },
    iconContainer: {
        height: 40,
        width: 40,
        borderRadius: 100,
        backgroundColor: THEME.COLORS.BLUE_EXTRA_LIGHT,

        justifyContent: 'center',
        alignItems: 'center'
    },
    specialtyContainer: {
        flex: 1
    },
    specialty: {
        textTransform: 'uppercase',
        fontSize: THEME.FONT_SIZE.INTER.XS,
        fontFamily: THEME.FONT_FAMILY.INTER.REGULAR,
        color: THEME.COLORS.GRAY_400,
    },
    professionalName: {
        fontSize: THEME.FONT_SIZE.INTER.MD,
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD,
        color: THEME.COLORS.GRAY_400,
    },
});