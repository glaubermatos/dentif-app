import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeHeader } from "../components/HomeHeader";
import { Title } from "../components/Title";
import { AppointmentCard } from "../components/AppointmentCard";
import { THEME } from "../styles/theme";
import { Specialty } from "../components/Specialty";
import { Brain, Stethoscope, Tooth } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
    const navigation = useNavigation();

    function handleNavigateToNewAppointment() {
        navigation.navigate('agendar-consulta')
    }

    return (
        <View style={{flex: 1}}>
            <HomeHeader username="Glauber Matos" />

            <View style={styles.container}>
                <View style={{marginBottom: 40, gap:16}}>
                    <Title 
                        title="Sua próxima consulta"
                        subtitle="Evite atrasos, chegue no local de atendimento com antecedência"
                    />

                    <AppointmentCard 
                        status="Agendada"
                        specialty="Dentista"
                        professionalName="Luiz Geraldo Márcio Gonçalves"
                        date="Ter, 17 de Jul 2023"
                        time="10:00 am"
                    />
                </View>

                <View style={styles.novaConsultaContainer}>
                    <Title 
                        title="Agendar nova consulta"
                        subtitle="Selecione uma das especialidades para um novo atendimento"
                    />

                    <View style={{marginTop: 16, gap: 12}}>
                        <Specialty
                            onPress={handleNavigateToNewAppointment}
                            activeClick
                            specialty="Dentista"
                            professionalName="Luiz Geraldo Márcio Gonçalves"
                            icon={Tooth}
                        />

                        <Specialty
                            activeClick
                            specialty="Psicologia"
                            professionalName="Manoela Esther Carolina Oliveira"
                            icon={Brain}
                        />

                        <Specialty
                            activeClick
                            specialty="Enfermaria"
                            professionalName="Joana Sabrina Gonçalves"
                            icon={Stethoscope}
                        />
                    </View>
                </View>
            </View>


            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: -24,
        paddingHorizontal: 24,
        // borderTopLeftRadius: 40,
        // borderTopRightRadius: 40,
        paddingTop: 40,
        backgroundColor: THEME.COLORS.WHITE,

        gap: 16,
    },
    novaConsultaContainer: {
        // marginTop: 40,
    }
});