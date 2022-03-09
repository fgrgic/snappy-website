import React from 'react';
import Snappy from 'react-native-snappy';
import styled from 'styled-components/native';
import { View, Text } from '../../ui/primitives';

const Logo = () => {
  return (
    <LogoContainer>
      <Snappy name='snap' />
      <Text weight='bold'>Snappy Icons</Text>
    </LogoContainer>
  );
};

const LogoContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default Logo;
