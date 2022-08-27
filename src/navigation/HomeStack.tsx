import React from "react";
import { createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";
import {
  HOME_SCREEN,
  PROFILE_SCREEN,
  RESOURCES_SCREEN,
  SETTINGS_SCREEN,
  SURVEY_SCREEN,
} from "./screenNames";
//import Metrics from "../screens/metrics/Metrics";
import { HomeStackParamList } from "../../types";
import styles from "./styles/HomeStack.styles";
//import QuickLinks from "../screens/resources/QuickLinks";
import { COLORS } from "../constants/Colors";
import Drawer from "./DrawerNavigator";
//import OfficeInformation from "../screens/resources/OfficeInformation";
//import Resources from "../screens/resources/Resources";
//import WhoToTalkTo from "../screens/resources/WhoToTalkTo";
//import ListOfEmployees from "../screens/employees/ListOfEmployees";
// import PeopleDetails from "../screens/employees/PeopleDetails";
// import AccountMetrics from "../screens/metrics/AccountMetrics";
// import ProjectMetrics from "../screens/metrics/ProjectMetrics";
// import IndividualMetricsScreen from "../screens/metrics/IndividualMetricsScreen";
// import IndividualUtilization from "../screens/metrics/tabs/IndividualUtilizationTab";
// import MarketMetrics from "../screens/metrics/MarketMetrics";
// import AnnouncementScreen from "../screens/announcements/AnnouncementScreen";
// import CorporateMetrics from "../screens/metrics/CorporateMetrics";
// import OfficeHolidays from "../screens/holidays/OfficeHolidays";
// import OfficeHolidaysList from "../screens/holidays/OfficeHolidaysList";
// import NotificationsIcon from "./NotificationsIcon";
// import AddSurvey from "../screens/surveys/AddSurvey";
// import ManageSurveys from "../screens/surveys/ManageSurveys";
// import AllSurveys from "../screens/surveys/AllSurveys";
// import Survey from "../screens/surveys/Survey";
import ComingSoon from "../components/comingSoon/ComingSoon";
// import SubmittedSurvey from "../screens/surveys/SubmittedSurveyScreen";
// import SettingsScreen from "../screens/settings/SettingsScreen";
// import HomeScreen from "../screens/homeScreen/HomeScreen";
import BackButton from "../components/buttons/BackButton";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ResourcesScreen from "../screens/resourcesScreen/ResourcesScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import SettingsScreen from "../screens/settingsScreen/SettingsScreen";
// import RequestSurveyResponse from "../screens/surveys/RequestSurveyResponse";
// import PracticeMetrics from "../screens/metrics/PracticeMetrics";
// import ProfileScreen from "../screens/profile/ProfileScreen";
// import InAppNotifications from "../screens/inAppNotifications/InAppNotifications";
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
        // headerRight: () => <NotificationsIcon navigation={navigation} />,
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
      {/* <HomeStack.Screen
        options={{
          title: "Notifications",
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => <BackButton screenName={HOME_SCREEN} navigation={navigation} />,
        }}
        name={IN_APP_NOTIFICATIONS}
        component={InAppNotifications}
      /> */}
      {/* <HomeStack.Screen
        options={{
          title: "Announcement List",
          headerTitleStyle: styles.customHeaderTitle,
          headerLeft: () => <BackButton screenName={HOME_SCREEN} navigation={navigation} />,
        }}
        name={ANNOUNCEMENT}
        component={AnnouncementScreen}
      /> */}
      {/* <HomeStack.Screen
        options={{
          headerTitle: () => <Image style={styles.image} source={require("../../assets/images/adaptive-icon.png")} />,
        }}
        name={OFFICE_HOLIDAYS}
        component={OfficeHolidays}
      /> */}
      {/* <HomeStack.Screen options={{ title: "Metrics" }} name={METRICS} component={Metrics} /> */}
      <HomeStack.Screen options={{ title: "Resources" }} name={RESOURCES_SCREEN} component={ResourcesScreen} />
      {/* <HomeStack.Screen
        options={{
          title: "Quick Links",
          headerLeft: () => <BackButton screenName={RESOURCES} navigation={navigation} />,
        }}
        name={QUICK_LINKS}
        component={QuickLinks}
      /> */}
      {/* <HomeStack.Screen
        options={{
          title: "Who to talk to",
          headerLeft: () => <BackButton screenName={RESOURCES} navigation={navigation} />,
        }}
        name={WHO_TO_TALK_TO}
        component={WhoToTalkTo}
      /> */}
      {/* <HomeStack.Screen options={{ title: "People" }} name={EMPLOYEE_DIRECTORY} component={ListOfEmployees} />
      <HomeStack.Screen
        options={{ title: "Metrics", headerLeft: () => <BackButton screenName={METRICS} navigation={navigation} /> }}
        name={CORPORATE_METRICS}
        component={CorporateMetrics}
      />
      <HomeStack.Screen options={{ title: "Surveys" }} name={ALL_SURVEYS} component={AllSurveys} />
      <HomeStack.Screen options={{ title: "Manage Surveys" }} name={MANAGE_SURVEYS} component={ManageSurveys} />
      <HomeStack.Screen
        options={{ title: "Surveys", headerTitleStyle: styles.customHeaderTitle }}
        name={SUBMIT_SURVEY}
        component={SubmittedSurvey}
      /> */}
      <HomeStack.Screen
        options={{
          title: "Today's Data",
          headerTitleStyle: styles.customHeaderTitle,
          headerLeft: () => <BackButton screenName={HOME_SCREEN} navigation={navigation} />,
        }}
        name={SURVEY_SCREEN}
        component={Survey}
      />
      {/* <HomeStack.Screen
        options={{ title: "Surveys", headerTitleStyle: styles.customHeaderTitle }}
        name={ADD_SURVEY}
        component={AddSurvey}
      /> */}
      {/* <HomeStack.Screen
        options={{
          title: "Survey Type",
          headerTitleStyle: styles.customHeaderTitle,
          headerLeft: () => <BackButton screenName={ALL_SURVEYS} navigation={navigation} />,
        }}
        name={SURVEY_RESPONSE}
        component={RequestSurveyResponse}
      /> */}

      {/* <HomeStack.Screen
        options={{
          title: "Upcoming Holidays",
          headerTitleStyle: styles.customHeaderTitle,
          headerLeft: () => <BackButton screenName={HOME_SCREEN} navigation={navigation} />,
        }}
        name={HOLIDAYS_LIST}
        component={OfficeHolidaysList}
      /> */}
      {/* <HomeStack.Screen
        options={{
          title: "Metrics",
          headerTitleStyle: styles.customHeaderTitle,
          headerLeft: () => <BackButton screenName={METRICS} navigation={navigation} />,
        }}
        name={ACCOUNT_METRICS}
        component={AccountMetrics}
      />
      <HomeStack.Screen
        options={{
          title: "Metrics",
          headerTitleStyle: styles.customHeaderTitle,
          headerLeft: () => <BackButton screenName={METRICS} navigation={navigation} />,
        }}
        name={PROJECT_METRICS}
        component={ProjectMetrics} */}
      {/* />
      <HomeStack.Screen
        options={{
          title: "Metrics",
          headerTitleStyle: styles.customHeaderTitle,
          headerLeft: () => <BackButton screenName={METRICS} navigation={navigation} />,
        }}
        name={MARKET_METRICS}
        component={MarketMetrics}
      />
      <HomeStack.Screen
        options={{
          title: "Metrics",
          headerTitleStyle: styles.customHeaderTitle,
          headerLeft: () => <BackButton screenName={METRICS} navigation={navigation} />,
        }}
        name={PRACTICE_METRICS}
        component={PracticeMetrics}
      /> */}
      {/* <HomeStack.Screen
        options={{
          title: "Metrics",
          headerTitleStyle: styles.customHeaderTitle,
          headerLeft: () => <BackButton screenName={METRICS} navigation={navigation} />,
        }}
        name={INDIVIDUAL_METRICS}
        component={IndividualMetricsScreen}
      />
      <HomeStack.Screen
        options={{ title: "Metrics" }}
        name={INDIVIDUAL_UTILIZATION}
        component={IndividualUtilization}
      /> */}

      {/* <HomeStack.Screen
        options={{
          title: "People",
          headerTitleStyle: styles.customHeaderTitle,
          headerLeft: () => <BackButton screenName={EMPLOYEE_DIRECTORY} navigation={navigation} />,
        }}
        name={PEOPLE_DETAILS}
        component={PeopleDetails}
      /> */}
      {/* <HomeStack.Screen
        options={{
          title: "Office Information",
          headerLeft: () => <BackButton screenName={RESOURCES} navigation={navigation} />,
        }}
        name={OFFICE_INFORMATION}
        component={OfficeInformation}
      /> */}
      {/* <HomeStack.Screen options={{ title: "Profile" }} name={PROFILE_SCREEN} component={PROFILE_SCREEN} /> */}
      <HomeStack.Screen options={{ title: "Settings" }} name={SETTINGS_SCREEN} component={SettingsScreen} />
      <HomeStack.Screen
        options={{ title: "Profile", headerTitleStyle: styles.customHeaderTitle }}
        name={PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
