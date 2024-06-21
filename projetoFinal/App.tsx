import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
