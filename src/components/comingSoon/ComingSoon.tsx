import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./ComingSoon.styles";
import AnimatedLottieView from "lottie-react-native";

const ComingSoon = () => {
  const lottieRef = useRef<AnimatedLottieView | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current?.play();
    }
  }, [lottieRef.current]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Sorry for the dust! We are working hard to make this available to you as soon as possible.
      </Text>
      <View style={styles.animation}>
        <LottieView ref={lottieRef} source={require("../../../assets/json/comingsoon.json")} />
      </View>
    </View>
  );
};

export default ComingSoon;
