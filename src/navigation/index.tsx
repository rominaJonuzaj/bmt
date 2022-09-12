/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *r
 */
 import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
 import { createStackNavigator } from "@react-navigation/stack";
 import * as React from "react";
 import { ColorSchemeName } from "react-native";
 import AnimatedAppLoader from "../components/AnimatedAppLoader";
 import NotFoundScreen from "../screens/authScreens/NotFoundScreen";
 import { AuthStackParamList, RootStackParamList } from "../../types";
 import HomeStackNav from "./HomeStack";
 import TermsAndConditions from "../screens/authScreens/TermsAndConditions";
 import { HOME_SCREEN, TERMS_AND_CONDITIONS } from "./screenNames";
import HomeScreen from "../screens/homeScreen/HomeScreen";
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   //const user = React.useContext(UserContext);
 
   return (
     <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
       <AnimatedAppLoader>
         {true ? (
           true ? (
             <RootNavigator />
           ) : (
             <TermsAndConditionsNavigator />
           )
         ) : (
           <AuthStackNavigator />
         )}
       </AnimatedAppLoader>
     </NavigationContainer>
   );
 }
 
 const Stack = createStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Root" component={HomeStackNav} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
     </Stack.Navigator>
   );
 }
 
 const AuthStack = createStackNavigator<AuthStackParamList>();
 
 function AuthStackNavigator() {
   return (
     <AuthStack.Navigator screenOptions={{ headerShown: false }}>
       <AuthStack.Screen name={HOME_SCREEN} component={HomeScreen} />
     </AuthStack.Navigator>
   );
 }
 
 function TermsAndConditionsNavigator() {
   return (
     <AuthStack.Navigator screenOptions={{ headerShown: false }}>
       <AuthStack.Screen name={TERMS_AND_CONDITIONS} component={TermsAndConditions} />
     </AuthStack.Navigator>
   );
 }
 