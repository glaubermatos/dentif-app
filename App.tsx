import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { ActivityIndicator } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Horse, Heart, Cube } from 'phosphor-react-native';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

	if (!fontsLoaded) {
		return (<ActivityIndicator />)
	}
  return (
    <View style={styles.container}>

      <Heart color="#AE2983" weight="fill" size={32} />

      <Text style={styles.text}>CLÉO, EU TE AMO!</Text>
      <StatusBar style="auto" />
    </View>
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
    fontSize: 32
  }
});
