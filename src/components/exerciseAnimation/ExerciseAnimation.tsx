import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./ExerciseAnimation.styles";
import AnimatedLottieView from "lottie-react-native";

const ExerciseAnimation = () => {
  const lottieRef = useRef<AnimatedLottieView | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current?.play();
    }
  }, [lottieRef.current]);

  return (
    <View style={styles.animation}>
      <LottieView ref={lottieRef} source={require("../../../assets/json/exercise.json")} />
    </View>
  );
};

export default ExerciseAnimation;
