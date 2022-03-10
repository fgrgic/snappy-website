import { Button, View } from 'react-native';
import React from 'react';
import { Text, Screen } from '../../ui/primitives';
import { useCustomTheme } from '../../providers/ThemeProvider';
import Snappy, { allSvgIcons, snappyNameArray } from 'react-native-snappy';
import Logo from '../../components/Logo';
import IconCard from '../../components/IconCard';
import Search from '../../components/Search';
import useDebounce from '../../hooks/useDebounce';
import SearchResults from '../../components/SearchResults';

type Props = {};

const Home = (props: Props) => {
  const [query, setQuery] = React.useState('');
  const debouncedQuery = useDebounce<string>(query, 300);

  return (
    <Screen>
      <Screen.Content>
        <Logo />
        <Search query={query} onChange={(newQuery) => setQuery(newQuery)} />
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
              <IconCard name={iconName} />
            ))}
        </SearchResults>
      </Screen.Content>
    </Screen>
  );
};

export default Home;
