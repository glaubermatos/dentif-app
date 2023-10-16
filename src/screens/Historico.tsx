import { StyleSheet, Text, View } from "react-native";
import { TagFilterOption } from "../components/TagFilterOption";
import { TagFilter } from "../components/TagFilter";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { AppointmentCard } from "../components/AppointmentCard";
import { Container } from "../layout/Container";
import { THEME } from "../styles/theme";

export const Historico = () => {
    return (
        <View style={styles.container}>
            <Header title="Histórico"/>

            <Container>
                <Title 
                    title="Histórico de consultas"
                    subtitle="Visualize as consultas já realizadas"
                />

                <View 
                    style={{
                        marginTop: 24,
                        marginBottom: 16
                    }}
                >
                    <TagFilter />
                </View>

                <AppointmentCard 
                    status="Realizada"
                    specialty="Dentista"
                    professionalName="Luiz Geraldo Márcio Gonçalves"
                    date="Ter, 17 de Jul 2023"
                    time="10:00 am"
                />
            </Container>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.WHITE,
    }
});