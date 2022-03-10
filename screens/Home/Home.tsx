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

type Props = {};

const Home = (props: Props) => {
  const [query, setQuery] = React.useState('');
  const [showToast, setShowToast] = React.useState<String | boolean>(false);

  const debouncedQuery = useDebounce<string>(query, 300);
  const theme = useTheme();
  const { themeVersion, setThemeVersion } = useCustomTheme();

  React.useEffect(() => {
    if (!showToast) return;

    const timeout = setTimeout(() => {
      setShowToast(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [showToast]);

  return (
    <Screen>
      <Toast
        text={`Copied "${showToast}" to clipboard`}
        shown={!!showToast}
        tone='success'
      />
      <Screen.Content>
        <Header />
        <Spacer />
        <Logo />
        <Spacer />
        <Spacer />
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
                color={theme.palette.alpha.text}
                onPress={() => setShowToast(iconName)}
              />
            ))}
        </SearchResults>
      </Screen.Content>
    </Screen>
  );
};

export default Home;
