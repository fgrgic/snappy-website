import { StyleSheet } from 'react-native';
import Navigation from './navigation';
import Loader from './navigation/Loader';
import { ThemeProvider } from './providers/ThemeProvider';

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
