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

export const Cadastro = () => {
    return (
        <View style={styles.container}>
            {/* <Header title="Cadastro" /> */}
            <HomeHeader />

            <Title title="Cadastre-se" subtitle="Para utilizar nosso app de agendamento de serviços especializados" />

            <Input placeholder="Nome" />

            <Button title="Salvar" />

            <Specialty 
                icon={Tooth}
                specialty="Dentista" 
                professionalName="Luiz Geraldo Mácio Gonçalves" 
                activeClick={true}
            />

            <AppointmentCard status="Agendada"   />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.WHITE,
    }
});