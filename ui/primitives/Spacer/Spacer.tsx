import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { SpacingType } from '../../types';
import View from '../View';

interface SpacerProps extends ViewProps {
  size?: SpacingType | number;
}

const Spacer = ({ size: sizeProp = 'medium', style }: SpacerProps) => {
  const theme = useTheme();
  const size =
    typeof sizeProp === 'string'
      ? theme.spacing.sizes[sizeProp]
      : theme.spacing.rem(sizeProp);

  return <View style={[{ height: size, width: size }, style]} />;
};

export default Spacer;
