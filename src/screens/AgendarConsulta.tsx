import { StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Container } from "../layout/Container";
import { Specialty } from "../components/Specialty";
import { THEME } from "../styles/theme";
import { Location } from "../components/Location";
import { AppointmentCalendar } from "../components/AppointmentCalendar";
import { Button } from "../components/Button";
import { MapPin, Tooth } from "phosphor-react-native";

export const AgendarConsulta = () => {
    return (
        <View style={styles.container}>
            <Header title="Agendar consulta" />

            <View style={styles.content}>
                <Container>
                    <View style={styles.infoContent}>
                        <View>
                            <Text style={styles.label}>
                                Especialidade
                            </Text>

                            <Specialty
                                icon={Tooth}
                                activeClick
                                specialty="Dentista"
                                professionalName="Luiz Geraldo Márcio Gonçalves"
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>
                                Local do atendimento
                            </Text>

                            <Location 
                                icon={MapPin}
                                local="Luiz Geraldo Márcio Gonçalves"
                            />
                        </View>

                    </View>
                </Container>

                <View style={styles.calendarContainer}>
                    <AppointmentCalendar />
                </View>
            </View>

            <View style={{marginHorizontal: 24, marginBottom: 16}}>
                <Button title="Agendar" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
    },
    infoContent: {
        gap: 16
    },
    label: {
        marginBottom: 4,
        color: THEME.COLORS.GRAY_500,
        fontSize: THEME.FONT_SIZE.INTER.MD,
        fontFamily: THEME.FONT_FAMILY.INTER.REGULAR
    },

    calendarContainer: {
        marginTop: 24
    }
});