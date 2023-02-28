export type IntroScreenRoutes = {
  IntroScreen: undefined;
};

export type HomeScreenRoutes = {
  HomeScreen: undefined;
};

export type MyPageScreenRoutes = {
  MyPageScreen: undefined;
};

export type RecordScreenRoutes = {
  RecordScreen: undefined;
};

export type RootStackParamList = HomeScreenRoutes &
  IntroScreenRoutes &
  MyPageScreenRoutes &
  RecordScreenRoutes;
