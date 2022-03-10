import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';
import Snappy from 'react-native-snappy';
import styled, { useTheme } from 'styled-components/native';
import { View, Text } from '../../ui/primitives';

const Logo = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Home')}>
      <LogoContainer marginHorizontal='small'>
        <Snappy
          name='snap'
          size={theme.typography.sizes.xxlarge}
          color={theme.palette.alpha.text}
        />
        <Text.H2>Snappy Icons</Text.H2>
      </LogoContainer>
    </Pressable>
  );
};

const LogoContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default Logo;
