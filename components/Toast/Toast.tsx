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
    <Container>
      <ToastContainer tone={tone}>
        <Text color='primary.text'>{text}</Text>
      </ToastContainer>
    </Container>
  );
};

const Container = styled(View)`
  position: absolute;
  width: 100%;
  bottom: ${({ theme }) => theme.spacing.sizes.xlarge}px;
  align-items: center;
  justify-content: center;
  elevation: 10;
  z-index: 10;
`;

const ToastContainer = styled(View)<Pick<ToastProps, 'tone'>>`
  border-radius: ${({ theme }) => theme.shape.borderRadius.small}px;
  padding: ${({ theme }) => theme.spacing.sizes.xsmall}px;
  background-color: ${({ tone, theme }) =>
    tone === 'error'
      ? theme.palette.error.main
      : tone === 'success'
      ? theme.palette.primary.C
      : theme.palette.alpha.B};
`;

export default Toast;
