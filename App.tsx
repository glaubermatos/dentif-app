import { StyleSheet } from 'react-native';

import { ActivityIndicator } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';
import { Cadastro } from './src/screens/Cadastro';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

	if (!fontsLoaded) {
		return (<ActivityIndicator />)
	}
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    color: '#AE2983'
  }
});
