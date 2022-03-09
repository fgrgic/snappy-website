import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { View } from '..';

interface InputProps extends TextInputProps {}

const Input = (props: InputProps) => {
  return (
    <View>
      <TextInput {...props} />
    </View>
  );
};

export default Input;
