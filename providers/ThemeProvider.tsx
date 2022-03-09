import React, { Dispatch, SetStateAction } from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';
import LightTheme from '../ui/theme/themes/LightTheme';
import DarkTheme from '../ui/theme/themes/DarkTheme';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme } from 'styled-components';

export type ThemeVersion = 'system' | 'dark' | 'light';

interface ThemeContext {
  theme?: DefaultTheme | null;
  lightTheme?: DefaultTheme | null;
  darkTheme?: DefaultTheme | null;
  setDarkTheme: Dispatch<SetStateAction<typeof DarkTheme>>;
  setLightTheme: Dispatch<SetStateAction<typeof LightTheme>>;
  setTheme: Dispatch<SetStateAction<typeof LightTheme>>;
  themeVersion: ThemeVersion | null;
  setThemeVersion: React.Dispatch<React.SetStateAction<ThemeVersion>>;
  themeLoaded?: boolean;
}

const initialContext: ThemeContext = {
  theme: null,
  lightTheme: null,
  darkTheme: null,
  themeVersion: 'system',
  setTheme: () => {},
  setThemeVersion: () => {},
  setLightTheme: () => {},
  setDarkTheme: () => {},
};

const ThemeContext = React.createContext<ThemeContext>(initialContext);

interface Props {
  children?: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = React.useState(LightTheme);
  const [lightTheme, setLightTheme] = React.useState(LightTheme);
  const [darkTheme, setDarkTheme] = React.useState(DarkTheme);
  const [themeLoaded, setThemeLoaded] = React.useState(false);
  const colorScheme = useColorScheme();
  const [themeVersion, setThemeVersion] =
    React.useState<ThemeVersion>('system');

  React.useEffect(() => {
    if (themeVersion === 'system') {
      if (colorScheme === 'light') setTheme(lightTheme);
      else if (colorScheme === 'dark') setTheme(darkTheme);
      else return;
    } else if (themeVersion === 'dark') {
      setTheme(darkTheme);
    } else if (themeVersion === 'light') {
      setTheme(lightTheme);
    }
    setThemeLoaded(true);
  }, [colorScheme, themeVersion]);

  return (
    <ThemeContext.Provider
      value={{
        setTheme,
        setThemeVersion,
        themeVersion,
        setDarkTheme,
        setLightTheme,
        lightTheme,
        darkTheme,
        themeLoaded,
      }}
    >
      <DefaultThemeProvider theme={theme}>
        <StatusBar style={theme.statusBarStyle} />
        {children}
      </DefaultThemeProvider>
    </ThemeContext.Provider>
  );
};

const useCustomTheme = () => React.useContext(ThemeContext);

export { ThemeProvider, useCustomTheme };
