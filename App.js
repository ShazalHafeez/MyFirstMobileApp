import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to My First Andriod App</Text>
      <Text>How can we help you!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90ee90',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
