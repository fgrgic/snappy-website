import React from 'react';
import { Pressable, useWindowDimensions } from 'react-native';
import Snappy, { SnappyIconNames } from 'react-native-snappy';
import styled, { useTheme } from 'styled-components/native';
import * as Clipboard from 'expo-clipboard';

import { Spacer, Text, View } from '../../ui/primitives';

type IconCardProps = {
  name: SnappyIconNames;
  color?: string;
  strokeWidth?: number;
  size?: number;
  cardSize?: number;
  onPress?: () => void;
};

const IconCard = ({
  name,
  color,
  strokeWidth,
  size,
  cardSize: propCardSize,
  onPress,
}: IconCardProps) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const MAX_WIDTH = 1000;

  const smallWidth = width < MAX_WIDTH;
  const contentWidth = smallWidth ? width : MAX_WIDTH;
  const perRow = smallWidth ? 3 : 6;
  const DEFAULT_SIZE = contentWidth / perRow - theme.spacing.sizes.small * 2;
  const cardSize = propCardSize ?? DEFAULT_SIZE;

  return (
    <Pressable
      onPress={() => {
        if (onPress) onPress();
        Clipboard.setString(name);
      }}
    >
      <Container size={cardSize}>
        <Snappy
          name={name}
          color={color}
          strokeWidth={strokeWidth}
          size={size}
        />
        <Spacer />
        <Text size='small'>{name}</Text>
      </Container>
    </Pressable>
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
