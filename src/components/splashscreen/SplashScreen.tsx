import React, { useEffect, useRef, useState } from "react";
import { Platform, View } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./SplashScreen.styles";
import AnimatedLottieView from "lottie-react-native";

const SplashScreen = ({ children }) => {
  const [isAppReady, setAppReady] = useState(false);
  const lottieRef = useRef<AnimatedLottieView | null>(null);
  let count = 0;

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current?.play();
    }
  }, [lottieRef.current]);

  return (
    <View style={styles.splashscreen}>
      {isAppReady && children}
      {!isAppReady && (
        <LottieView
          ref={lottieRef}
          source={require("../../../assets/json/splash.json")}
          loop={false}
          onAnimationFinish={() => {
            if (Platform.OS === "ios") {
              count += 1;
              if (count === 1) {
                setAppReady(true);
              }
            } else {
              setAppReady(true);
            }
          }}
        />
      )}
    </View>
  );
};
export default SplashScreen;
