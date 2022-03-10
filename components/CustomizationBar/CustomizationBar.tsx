import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from '../../ui/primitives';

type CustomizationBarProps = {
  children?: React.ReactNode;
};

const CustomizationBar = ({ children }: CustomizationBarProps) => {
  return <Container marginHorizontal='small'>{children}</Container>;
};

const Container = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: '100%';
`;

export default CustomizationBar;
