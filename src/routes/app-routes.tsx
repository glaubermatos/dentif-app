import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { Cadastro } from '../screens/Cadastro';
import { AgendarConsulta } from '../screens/AgendarConsulta';
import { Historico } from '../screens/Historico';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name='home' component={Home} />
            <Screen name='cadastro' component={Cadastro} />
            <Screen name='agendar-consulta' component={AgendarConsulta} />
            <Screen name='historico' component={Historico} />
        </Navigator>
    );
}