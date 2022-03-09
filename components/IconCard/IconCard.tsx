import React from 'react';
import Snappy, { SnappyIconNames } from 'react-native-snappy';
import { Text, View } from '../../ui/primitives';

type IconCardProps = {
  name: SnappyIconNames;
  color?: string;
  strokeWidth?: number;
  size?: number;
};

const IconCard = ({ name, color, strokeWidth, size }: IconCardProps) => {
  return (
    <View>
      <Snappy name={name} color={color} strokeWidth={strokeWidth} size={size} />
      <Text>{name}</Text>
    </View>
  );
};

export default IconCard;
