import React from 'react';
import Snappy, { SnappyIconNames } from 'react-native-snappy';
import styled, { useTheme } from 'styled-components/native';
import Spacing from '../../ui/mixins/Spacing';
import { Spacer, Text, View } from '../../ui/primitives';

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
  cardSize: propCardSize,
}: IconCardProps) => {
  const theme = useTheme();
  const DEFAULT_SIZE = 1000 / 6 - theme.spacing.sizes.small * 2;
  const cardSize = propCardSize ?? DEFAULT_SIZE;

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
  border-radius: ${({ theme }) => theme.shape.borderRadius.medium}px;
  margin: ${({ theme }) => theme.spacing.sizes.small}px;
`;

export default IconCard;
