import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from '../../ui/primitives';

type Tone = 'error' | 'success' | 'neutral';

interface ToastProps {
  text?: string;
  tone?: Tone;
  shown?: boolean;
}

const Toast = ({ text, tone = 'neutral', shown }: ToastProps) => {
  if (!shown) return null;
  return (
    <Container style={{ position: 'absolute' }} tone={tone}>
      <Text color='primary.text'>{text}</Text>
    </Container>
  );
};

const Container = styled(View)<Pick<ToastProps, 'tone'>>`
  position: absolute;
  border-radius: ${({ theme }) => theme.shape.borderRadius.small}px;
  bottom: ${({ theme }) => theme.spacing.sizes.xxlarge};
  left: auto;
  elevation: 10;
  z-index: 10;
  background-color: ${({ tone, theme }) =>
    tone === 'error'
      ? theme.palette.error.main
      : tone === 'success'
      ? theme.palette.primary.C
      : theme.palette.alpha.B};
`;

export default Toast;
