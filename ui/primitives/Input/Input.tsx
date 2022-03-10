import React from 'react';
import { Platform, TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { View } from '..';
import BackgroundColor, {
  BackgroundColorMixinProps,
} from '../../mixins/BackgroundColor';
import Border, { BorderMixinProps } from '../../mixins/Border';
import Spacing, { SpacingMixinProps } from '../../mixins/Spacing';
import Typography, { TypographyMixinProps } from '../../mixins/Typography';

interface InputProps
  extends TextInputProps,
    SpacingMixinProps,
    BackgroundColorMixinProps,
    TypographyMixinProps,
    BorderMixinProps {}

const Input = (props: InputProps) => {
  return (
    <StyledInput
      bgColor='alpha.A'
      paddingHorizontal='small'
      paddingVertical='small'
      marginHorizontal='small'
      borderRadius='medium'
      {...props}
    />
  );
};

const StyledInput = styled(TextInput)<InputProps>`
  outline-style: none;
  ${Spacing}
  ${Typography}
  ${BackgroundColor}
  ${Border}
  font-family: nunito;
`;

export default Input;
