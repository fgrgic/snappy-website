import React from 'react';
import Snappy from 'react-native-snappy';
import styled, { useTheme } from 'styled-components/native';
import { View, Text } from '../../ui/primitives';

const Logo = () => {
  const theme = useTheme();

  return (
    <LogoContainer>
      <Snappy name='snap' size={theme.typography.sizes.xxlarge} />
      <Text.H2>Snappy Icons</Text.H2>
    </LogoContainer>
  );
};

const LogoContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default Logo;
