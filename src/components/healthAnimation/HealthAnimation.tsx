import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./HealthAnimation.styles";
import AnimatedLottieView from "lottie-react-native";

const HealthAnimation = () => {
  const lottieRef = useRef<AnimatedLottieView | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current?.play();
    }
  }, [lottieRef.current]);

  return (
    <View style={styles.animation}>
      <LottieView ref={lottieRef} source={require("../../../assets/json/health.json")} />
      <Text style={styles.text}>Breathe In ... Breathe Out ...</Text>
    </View>
  );
};

export default HealthAnimation;
