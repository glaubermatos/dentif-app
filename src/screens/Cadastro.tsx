import { StyleSheet, View } from "react-native";
import { Header } from "../components/Header";
import { Title } from "../components/Title";

import { THEME } from "../styles/theme";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { HomeHeader } from "../components/HomeHeader";
import { Specialty } from "../components/Specialty";
import { AppointmentCard } from "../components/AppointmentCard";
import { Tooth } from "phosphor-react-native";
import { Container } from "../layout/Container";
import { useNavigation } from "@react-navigation/native";

export const Cadastro = () => {
    const navigation = useNavigation();

    function handleNavigateToHome() {
        navigation.navigate('home')
    }

    return (
        <View style={styles.container}>
            <Header title="Cadastro" />

            <Container>
                <Title 
                    title="Cadastre-se" 
                    subtitle="Para utilizar nosso app de agendamento de serviços especializados" 
                />

                <View style={styles.form}>
                    <Input placeholder="Nome" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Matŕicula" />
                    <Input placeholder="Telefone" />
                </View>

            </Container>

            <View style={styles.actionsContainer}>
                <Button onPress={handleNavigateToHome} title="Salvar" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.WHITE,
    },
    form: {
        marginTop: 16,
        gap: 16
    },
    actionsContainer:{
        marginHorizontal: 24,
        marginBottom: 40
    }
});