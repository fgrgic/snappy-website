import { Button, View } from 'react-native';
import React from 'react';
import { Text } from '../../ui/primitives';
import { useCustomTheme } from '../../providers/ThemeProvider';

type Props = {};

const Home = (props: Props) => {
  const { setThemeVersion, themeVersion } = useCustomTheme();

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
