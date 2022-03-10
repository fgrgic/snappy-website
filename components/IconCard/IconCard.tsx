import React from 'react';
import Snappy, { SnappyIconNames } from 'react-native-snappy';
import styled from 'styled-components/native';
import Spacing from '../../ui/mixins/Spacing';
import { Spacer, Text, View } from '../../ui/primitives';

const DEFAULT_SIZE = 150;

type IconCardProps = {
  name: SnappyIconNames;
  color?: string;
  strokeWidth?: number;
  size?: number;
  cardSize?: number;
};

const IconCard = ({
  name,
  color,
  strokeWidth,
  size,
  cardSize = DEFAULT_SIZE,
}: IconCardProps) => {
  return (
    <Container size={cardSize}>
      <Snappy name={name} color={color} strokeWidth={strokeWidth} size={size} />
      <Spacer />
      <Text>{name}</Text>
    </Container>
  );
};

interface ContainerProps {
  size: number;
}

const Container = styled(View)<ContainerProps>`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.alpha.A};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ theme }) => theme.shape.borderRadius.large}px;
  margin: ${({ theme }) => theme.spacing.sizes.small}px;
`;

export default IconCard;
