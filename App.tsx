import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { ActivityIndicator } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Horse, Heart, Cube } from 'phosphor-react-native';
import { Cadastro } from './src/screens/Cadastro';
import { AgendarConsulta } from './src/screens/AgendarConsulta';
import { Historico } from './src/screens/Historico';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

	if (!fontsLoaded) {
		return (<ActivityIndicator />)
	}
  return (
    <AgendarConsulta />
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
