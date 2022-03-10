import React from 'react';
import { Pressable, Linking } from 'react-native';
import styled from 'styled-components/native';
import { useCustomTheme } from '../../providers/ThemeProvider';
import { Text, View } from '../../ui/primitives';
import ThemeToggle from '../ThemeToggle';

type Props = {};

const Header = (props: Props) => {
  return (
    <Container marginVertical='small' marginHorizontal='small'>
      <Text paddingHorizontal={0}>
        Check it out on{' '}
        <Pressable
          onPress={() =>
            Linking.openURL('https://github.com/fgrgic/react-native-snappy')
          }
        >
          <Text paddingHorizontal={0} color='primary.D'>
            GitHub
          </Text>
        </Pressable>{' '}
        or{' '}
        <Pressable
          onPress={() =>
            Linking.openURL('https://www.npmjs.com/package/react-native-snappy')
          }
        >
          <Text paddingHorizontal={0} color='primary.D'>
            npm
          </Text>
        </Pressable>
      </Text>
      <ThemeToggle />
    </Container>
  );
};

const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export default Header;
