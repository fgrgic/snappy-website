import { Button, View } from 'react-native';
import React from 'react';
import { Text } from '../../ui/primitives';
import { useCustomTheme } from '../../providers/ThemeProvider';
import Snappy from 'react-native-snappy';

type Props = {};

const Home = (props: Props) => {
  return (
    <View>
      <Snappy name='snap' />
      <Text.H1>Snappy Icons</Text.H1>
    </View>
  );
};

export default Home;
