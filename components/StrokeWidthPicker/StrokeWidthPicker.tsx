import React from 'react';
import { Pressable, PressableProps, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { Input, Text, View } from '../../ui/primitives';

interface StrokeWidthPickerProps extends PressableProps {
  value: number;
  onChange: (value: number) => void;
}

const StrokeWidthPicker = ({
  value,
  onChange,
  ...rest
}: StrokeWidthPickerProps) => {
  return (
    <Container marginTop='small'>
      <Text.Plain>Stroke Width</Text.Plain>
      <PickerContainer borderRadius='medium' style={{ overflow: 'hidden' }}>
        {[0.5, 1, 1.5, 2, 2.5].map((strokeWidth) => {
          const selected = value === strokeWidth;
          return (
            <Pressable onPress={() => onChange(strokeWidth)} {...rest}>
              <View
                paddingVertical='small'
                paddingHorizontal='xxsmall'
                bgColor={selected ? 'primary.A' : 'alpha.A'}
              >
                <Text color={selected ? 'primary.text' : 'alpha.text'}>
                  {strokeWidth}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </PickerContainer>
    </Container>
  );
};

const Container = styled(View)``;

const PickerContainer = styled(View)`
  /* height: 100%; */
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export default StrokeWidthPicker;
