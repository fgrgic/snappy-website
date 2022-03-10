import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking, Pressable } from 'react-native';
import Snappy, { allSvgIcons, snappyNameArray } from 'react-native-snappy';
import { useTheme } from 'styled-components/native';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import { Screen, Spacer, Text, View } from '../../ui/primitives';

type Props = {};

const About = (props: Props) => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Screen>
      <Screen.Content>
        <View>
          <Header />
          <Spacer />
          <Logo />
          <Spacer size='large' />
          <Text.H3>About</Text.H3>
          <Spacer />
          <Text.Copy>
            Snappy icons is a collection of more than{' '}
            {Math.floor(snappyNameArray.length / 10) * 10} open source icons
            designed on a 24x24 grid. The icons are designed as svgs and this
            package converts them to be compatible with the react-native-svg
            package.
          </Text.Copy>
          <Spacer />
          <Text.Copy>
            The pack is developed and maintained by{' '}
            <Pressable
              onPress={() => Linking.openURL('https://github.com/fgrgic')}
            >
              <Text.Plain color='primary.C'>@fgrgic.</Text.Plain>
            </Pressable>
          </Text.Copy>
          <Spacer />
          <Text.Copy>
            I will continue working on the icon pack, updating it with new
            icons. If you want a specific icon designed,
            <Pressable onPress={() => Linking.openURL('mailto:snappy@grgi.ch')}>
              <Text.Plain color='primary.C'> let me know.</Text.Plain>
            </Pressable>
          </Text.Copy>
          <Spacer />
          <Text.Copy>
            To make the icons come faster, you can always buy me
            <Pressable
              onPress={() =>
                Linking.openURL('https://www.buymeacoffee.com/Grga')
              }
            >
              <Text.Plain color='primary.C'> some fuel.</Text.Plain>
            </Pressable>
          </Text.Copy>
          <Spacer />
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: theme.spacing.sizes.small,
            }}
            onPress={() => navigation.navigate('Home')}
          >
            <Snappy
              name='chevron-left'
              color={theme.palette.primary.C}
              size={theme.typography.sizes.medium}
            />
            <Text.Plain color='primary.C'>Go Back</Text.Plain>
          </Pressable>
        </View>
      </Screen.Content>
    </Screen>
  );
};

export default About;
