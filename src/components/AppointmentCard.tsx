import { StyleSheet, Text, View } from "react-native";
import { Specialty } from "./Specialty";
import { CalendarBlank, Clock, Tooth } from "phosphor-react-native";
import { THEME } from "../styles/theme";
import { Tag, TagStyleProps } from "./Tag";

type Props = {
    status?: TagStyleProps;
}

export const AppointmentCard: React.FC<Props> = ({status}) => {
    return (
        <View style={styles.container}>

            <Specialty 
                icon={Tooth}
                specialty="Dentista" 
                professionalName="Luiz Geraldo Márcio Gonçalves"
            />

            <View style={styles.dateInformationContainer}>
                <View style={styles.info}>
                    <CalendarBlank size={20} color={THEME.COLORS.BLUE} />

                    <Text style={styles.infoText}>
                        Ter, 17 de Jul 2023
                    </Text>
                </View>

                <View style={styles.info}>
                    <Clock size={20} color={THEME.COLORS.BLUE} />

                    <Text style={styles.infoText}>
                        10:00 am
                    </Text>
                </View>
            </View>
            
            {status && (<Tag name={status} />)}
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: THEME.COLORS.GRAY_100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: THEME.COLORS.GRAY_200,

        gap: 20,
        position: 'relative',
    },
    dateInformationContainer: {
        backgroundColor: THEME.COLORS.WHITE,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 12,

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    info: {
        flexDirection: 'row',
        gap: 4
    },
    infoText: {
        fontSize: THEME.FONT_SIZE.INTER.MD,
        fontFamily: THEME.FONT_FAMILY.INTER.REGULAR,
        color: THEME.COLORS.GRAY_500,
    }

});