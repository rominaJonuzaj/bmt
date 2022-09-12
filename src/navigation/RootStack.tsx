import React from "react";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
//import AuthStackNavigator from "./AuthStackNavigator";
import { ColorSchemeName } from "react-native";
import { RootStackParamList } from "../../types";
import HomeStackNav from "./HomeStack";

const Root = createStackNavigator<RootStackParamList>();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  //const { user } = React.useContext(SignInContext);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Root.Navigator headerMode="none">
          {/* {true ? (
            <Root.Screen name="Home" component={HomeStackNav} />
          ) : (
            <Root.Screen name="Auth" component={AuthStackNavigator} />
          )} */}
            <Root.Screen name="Home" component={HomeStackNav} />
        </Root.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
