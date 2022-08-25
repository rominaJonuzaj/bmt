import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./LoadingSpinner.styles";
import AnimatedLottieView from "lottie-react-native";

const LoadingSpinner = () => {
  const lottieRef = useRef<AnimatedLottieView | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current?.play();
    }
  }, [lottieRef.current]);

  return (
    <View style={styles.spinner}>
      <LottieView ref={lottieRef} source={require("../../../assets/json/spinner.json")} />
      <Text style={styles.text}>Loading something next level...</Text>
    </View>
  );
};

export default LoadingSpinner;
