import { Button, Pressable, Linking } from 'react-native';
import React from 'react';
import { Text, Screen, Spacer } from '../../ui/primitives';
import { useCustomTheme } from '../../providers/ThemeProvider';
import Snappy, { allSvgIcons, snappyNameArray } from 'react-native-snappy';
import Logo from '../../components/Logo';
import IconCard from '../../components/IconCard';
import Search from '../../components/Search';
import useDebounce from '../../hooks/useDebounce';
import SearchResults from '../../components/SearchResults';
import Header from '../../components/Header';
import { useTheme } from 'styled-components/native';
import Toast from '../../components/Toast';
import CustomizationBar from '../../components/CustomizationBar';
import HexColorPicker from '../../components/HexColorPicker';
import StrokeWidthPicker from '../../components/StrokeWidthPicker';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const Home = (props: Props) => {
  const theme = useTheme();
  const { themeVersion, setThemeVersion } = useCustomTheme();
  const navigation = useNavigation();

  const [query, setQuery] = React.useState('');
  const [showToast, setShowToast] = React.useState<String | boolean>(false);
  const [strokeWidth, setStrokeWidth] = React.useState(2);
  const [iconColor, setIconColor] = React.useState(theme.palette.alpha.text);

  const debouncedQuery = useDebounce<string>(query, 300);
  const debouncedColor = useDebounce<string>(iconColor, 500);

  React.useEffect(() => {
    if (!showToast) return;

    const timeout = setTimeout(() => {
      setShowToast(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [showToast]);

  React.useEffect(() => {
    setIconColor(theme.palette.alpha.text);
  }, [themeVersion]);

  return (
    <>
      <Toast
        text={`Copied "${showToast}" to clipboard`}
        shown={!!showToast}
        tone='success'
      />
      <Screen>
        <Screen.Content>
          <Header />
          <Spacer />
          <Logo />
          <Spacer size='large' />
          <Text.H4 paddingHorizontal='small'>Customize</Text.H4>
          <CustomizationBar>
            <HexColorPicker
              value={iconColor}
              onChangeText={(newText) => setIconColor(newText)}
            />
            <StrokeWidthPicker
              value={strokeWidth}
              onChange={(newWidth) => setStrokeWidth(newWidth)}
            />
          </CustomizationBar>
          <Spacer />
          <Text.H4 paddingHorizontal='small'>Search</Text.H4>
          <Spacer size='small' />
          <Search query={query} onChange={(newQuery) => setQuery(newQuery)} />
          <Spacer />
          <SearchResults>
            {snappyNameArray
              .filter((iconName) => {
                if (debouncedQuery === '') return true;
                const kebabCaseQuery = query.replace(/\s+/g, '-').toLowerCase();
                let iconInQuery = false;
                allSvgIcons[iconName].keywords?.forEach((keyword) => {
                  if (keyword.includes(kebabCaseQuery)) {
                    iconInQuery = true;
                  }
                });
                if (iconName.includes(kebabCaseQuery)) iconInQuery = true;
                return iconInQuery;
              })
              .map((iconName) => (
                <IconCard
                  key={iconName}
                  name={iconName}
                  color={
                    debouncedColor.length <= 3 ||
                    (debouncedColor.length > 4 &&
                      debouncedColor.length % 2 === 0)
                      ? theme.palette.alpha.text
                      : debouncedColor
                  }
                  strokeWidth={strokeWidth}
                  onPress={() => setShowToast(iconName)}
                />
              ))}
          </SearchResults>
          <Spacer />
          <Text.Copy>
            Snappy Icons pack is developed and maintained by{' '}
            <Pressable
              onPress={() => Linking.openURL('https://github.com/fgrgic')}
            >
              <Text.Plain color='primary.C'>@fgrgic.</Text.Plain>
            </Pressable>
          </Text.Copy>
          <Pressable onPress={() => navigation.navigate('About')}>
            <Text.Copy color='primary.C'>Read More</Text.Copy>
          </Pressable>
          <Spacer size='xlarge' />
        </Screen.Content>
      </Screen>
    </>
  );
};

export default Home;
