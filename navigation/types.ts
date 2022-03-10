declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, MainStackParamList {}
  }
}

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  About: undefined;
};
