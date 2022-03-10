import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';
import Snappy from 'react-native-snappy';
import { useTheme } from 'styled-components/native';
import Logo from '../../components/Logo';
import { Screen, Spacer, Text } from '../../ui/primitives';

type Props = {};

const NotFound = (props: Props) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Screen>
      <Screen.Content>
        <Spacer />
        <Logo />
        <Spacer />
        <Text.H1>Oops!</Text.H1>
        <Text.Copy>We couldn't find what you're looking for.</Text.Copy>
        <Spacer />
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: theme.spacing.sizes.medium,
          }}
          onPress={() => navigation.navigate('Root')}
        >
          <Snappy
            name='home'
            color={theme.palette.primary.C}
            size={theme.typography.sizes.medium}
          />
          <Text.Plain color='primary.C' paddingLeft='xsmall'>
            Go Home
          </Text.Plain>
        </Pressable>
      </Screen.Content>
    </Screen>
  );
};

export default NotFound;
