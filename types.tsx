/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import {
 HOME_SCREEN,
 PROFILE_SCREEN,
 TERMS_AND_CONDITIONS,
 RESOURCES_SCREEN,
 SETTINGS_SCREEN,
 SURVEY_SCREEN,
} from "./src/navigation/screenNames";

export type RootStackParamList = {
  NotFound: undefined;
  Root: { screen: string };
};

export type AuthStackParamList = {
  [HOME_SCREEN]: undefined;
  [TERMS_AND_CONDITIONS]: undefined;
};

export type BottomTabParamList = {
  Feed: undefined;
  Metrics: undefined;
  Account: undefined;
};

// export type TabOneParamList = {
//   TabOneScreen: undefined;
// };

// export type TabTwoParamList = {
//   Metrics: undefined;
// };

export type HomeStackParamList = {
  [HOME_SCREEN]: undefined;
  [PROFILE_SCREEN]: undefined;
  [RESOURCES_SCREEN]: undefined;
  [SETTINGS_SCREEN]: undefined;
  [SURVEY_SCREEN]: undefined;

};
