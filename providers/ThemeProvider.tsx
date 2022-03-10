import React, { Dispatch, SetStateAction } from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';
import LightTheme from '../ui/theme/themes/LightTheme';
import DarkTheme from '../ui/theme/themes/DarkTheme';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme } from 'styled-components';

export type ThemePreference = 'system' | 'dark' | 'light';
export type ThemeVersion = 'dark' | 'light';

interface ThemeContext {
  theme?: DefaultTheme | null;
  lightTheme?: DefaultTheme | null;
  darkTheme?: DefaultTheme | null;
  setDarkTheme: Dispatch<SetStateAction<typeof DarkTheme>>;
  setLightTheme: Dispatch<SetStateAction<typeof LightTheme>>;
  setTheme: Dispatch<SetStateAction<typeof LightTheme>>;
  themePreference: ThemePreference | null;
  setThemePreference: React.Dispatch<React.SetStateAction<ThemePreference>>;
  themeVersion: ThemeVersion | null;
  setThemeVersion: React.Dispatch<React.SetStateAction<ThemeVersion>>;
  themeLoaded?: boolean;
}

const initialContext: ThemeContext = {
  theme: null,
  lightTheme: null,
  darkTheme: null,
  themePreference: 'system',
  themeVersion: 'light',
  setTheme: () => {},
  setThemePreference: () => {},
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
  const [themePreference, setThemePreference] =
    React.useState<ThemePreference>('system');

  const [themeVersion, setThemeVersion] = React.useState<ThemeVersion>('light');

  React.useEffect(() => {
    if (themePreference === 'system') {
      if (colorScheme === 'light') {
        setTheme(lightTheme);
        setThemeVersion('light');
      } else if (colorScheme === 'dark') {
        setTheme(darkTheme);
        setThemeVersion('dark');
      } else return;
    } else if (themePreference === 'dark') {
      setTheme(darkTheme);
      setThemeVersion('dark');
    } else if (themePreference === 'light') {
      setTheme(lightTheme);
      setThemeVersion('light');
    }
    setThemeLoaded(true);
  }, [colorScheme, themePreference, themeVersion]);

  return (
    <ThemeContext.Provider
      value={{
        setTheme,
        setThemePreference,
        themePreference,
        setDarkTheme,
        setLightTheme,
        lightTheme,
        darkTheme,
        themeLoaded,
        themeVersion,
        setThemeVersion,
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
