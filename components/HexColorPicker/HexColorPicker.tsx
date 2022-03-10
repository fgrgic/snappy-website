import React from 'react';
import { Platform, TextInputProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { View, Text, Input } from '../../ui/primitives';

interface HexColorPickerProps extends TextInputProps {}

const HexColorPicker = (props: HexColorPickerProps) => {
  const theme = useTheme();

  const COLOR_PREVIEW_SIZE =
    theme.typography.sizes.small +
    theme.spacing.sizes.xsmall +
    2 * theme.spacing.sizes.small;

  return (
    <Container marginTop='small' marginRight='small'>
      <Text.Plain>Color</Text.Plain>
      <PickerContainer>
        <View
          borderRadius='medium'
          marginRight='xsmall'
          style={{
            backgroundColor: props.value,
            width: COLOR_PREVIEW_SIZE,
            height: COLOR_PREVIEW_SIZE,
          }}
        />
        <Input
          placeholder={theme.palette.alpha.text}
          bgColor='alpha.A'
          borderRadius='medium'
          marginHorizontal={0}
          selectTextOnFocus
          {...props}
          onChangeText={(newText) => {
            if (props.onChangeText) {
              if (newText.startsWith('#')) {
                props.onChangeText(newText);
              } else {
                props.onChangeText('#' + newText);
              }
            }
          }}
        />
      </PickerContainer>
    </Container>
  );
};

const Container = styled(View)``;

const PickerContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export default HexColorPicker;
