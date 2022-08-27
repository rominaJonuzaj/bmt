import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { COLORS } from "../../constants/Colors";
interface Props {
  children: React.ReactNode;
  coords?: { x: 0.4; y: 0.2 };
  style?: StyleProp<ViewStyle>;
}
const Container: React.FC<Props> = ({ children, coords, style }) => {
  const startCoords = { x: 0.4, y: 0.2 };
  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[COLORS.DARK_PURPLE, COLORS.LIGHT_BROWN]}
        start={coords ? coords : startCoords}
        style={[style, { height: "100%" }]}
      >
        {children}
      </LinearGradient>
    </SafeAreaProvider>
  );
};

export default Container;
