import React from "react";
import { createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";
import {
  HOME_SCREEN,
  PROFILE_SCREEN,
  RESOURCES_SCREEN,
  SETTINGS_SCREEN,
  SURVEY_SCREEN,
} from "./screenNames";
import { HomeStackParamList } from "../../types";
import styles from "./styles/HomeStack.styles";
import { COLORS } from "../constants/Colors";
import Drawer from "./DrawerNavigator";
import BackButton from "../components/buttons/BackButton";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ResourcesScreen from "../screens/resourcesScreen/ResourcesScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import SettingsScreen from "../screens/settingsScreen/SettingsScreen";
import { Image } from "react-native";
import Survey from "../screens/surveys/Survey";

const HomeStack = createDrawerNavigator<HomeStackParamList>();

const HomeStackNav = ({ navigation }: { navigation: any }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        drawerStyle: styles.drawerStyle,
        headerTitleAlign: "center",
        headerTintColor: COLORS.WHITE,
        headerTitleStyle: styles.headerTitle,
        sceneContainerStyle: styles.container,
      }}
      drawerContent={(props: DrawerContentComponentProps) => <Drawer {...props} />}
      initialRouteName={HOME_SCREEN}
    >
      <HomeStack.Screen
        options={{
          headerTitle: () => <Image style={styles.image} source={require("../../assets/images/logo.png")} />,
        }}
        name={HOME_SCREEN}
        component={HomeScreen}
      />
      <HomeStack.Screen options={{ title: "Informacion" }} name={RESOURCES_SCREEN} component={ResourcesScreen} />
      <HomeStack.Screen
        options={{
          title: "Të dhënat e sotme",
          headerTitleStyle: styles.customHeaderTitle,
          headerLeft: () => <BackButton screenName={HOME_SCREEN} navigation={navigation} />,
        }}
        name={SURVEY_SCREEN}
        component={Survey}
      />
      <HomeStack.Screen options={{ title: "Cilësime" }} name={SETTINGS_SCREEN} component={SettingsScreen} />
      <HomeStack.Screen
        options={{ title: "Profili im", headerTitleStyle: styles.customHeaderTitle }}
        name={PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
