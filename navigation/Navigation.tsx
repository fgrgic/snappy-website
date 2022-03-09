import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import linking from './LinkingConfiguration';
import { MainStackParamList, RootStackParamList } from './types';
import Home from '../screens/Home';
import About from '../screens/About';
import NotFound from '../screens/NotFound';

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Root = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name='Root' component={MainNavigator} />
      <Root.Screen name='NotFound' component={NotFound} />
    </Root.Navigator>
  );
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name='Home' component={Home}></Main.Screen>
      <Main.Screen name='About' component={About}></Main.Screen>
    </Main.Navigator>
  );
};

export default Navigation;
