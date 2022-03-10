import React from 'react';
import { Pressable } from 'react-native';
import Snappy from 'react-native-snappy';
import { useTheme } from 'styled-components/native';
import { useCustomTheme } from '../../providers/ThemeProvider';
import { View } from '../../ui/primitives';

type Props = {};

const ThemeToggle = (props: Props) => {
  const theme = useTheme();
  const { themeVersion, setThemePreference, themePreference } =
    useCustomTheme();

  return (
    <View>
      <Pressable
        onPress={() => {
          if (themeVersion === 'light') {
            setThemePreference('dark');
          }
          if (themeVersion === 'dark') {
            setThemePreference('light');
          }
        }}
      >
        <Snappy
          name={themeVersion === 'dark' ? 'sun' : 'moon'}
          color={theme.palette.alpha.text}
        />
      </Pressable>
    </View>
  );
};

export default ThemeToggle;
