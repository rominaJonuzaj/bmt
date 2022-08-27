import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./HelpAnimation.styles";
import AnimatedLottieView from "lottie-react-native";

const HelpAnimation = () => {
  const lottieRef = useRef<AnimatedLottieView | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current?.play();
    }
  }, [lottieRef.current]);

  return (
    <View style={styles.animation}>
      <Text style={styles.text}>I Love You!</Text>
      <LottieView ref={lottieRef} source={require("../../../assets/json/help.json")} />
    </View>
  );
};

export default HelpAnimation;
