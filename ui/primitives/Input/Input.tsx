import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
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
  return <StyledInput {...props} />;
};

const StyledInput = styled(TextInput)<InputProps>`
  ${Spacing}
  ${Typography}
  ${BackgroundColor}
  ${Border}
  background-color: ${({ theme }) => theme.palette.alpha.A};
  padding-horizontal: ${({ theme }) => theme.spacing.sizes.small}px;
  padding-vertical: ${({ theme }) => theme.spacing.sizes.small}px;
  margin-horizontal: ${({ theme }) => theme.spacing.sizes.small}px;
  border-radius: ${({ theme }) => theme.shape.borderRadius.medium}px;
  font-family: nunito;
`;

export default Input;
