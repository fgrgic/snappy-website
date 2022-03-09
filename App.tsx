import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import Loader from './navigation/Loader';
import { ThemeProvider } from './providers/ThemeProvider';
import Home from './screens/Home';

export default function App() {
  return (
    <ThemeProvider>
      <Loader>
        <Navigation />
      </Loader>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
