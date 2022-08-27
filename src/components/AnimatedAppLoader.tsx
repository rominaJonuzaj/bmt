import React from "react";
import AppLoading from "expo-app-loading";
import SplashScreen from "../components/splashscreen/SplashScreen";

function AnimatedAppLoader({ children }) {
  const [isSplashReady, setSplashReady] = React.useState(false);

  const onFinish = React.useMemo(() => setSplashReady(true), []);

  if (!isSplashReady) {
    return <AppLoading autoHideSplash={false} onError={console.error} onFinish={onFinish} />;
  }

  return <SplashScreen>{children}</SplashScreen>;
}

export default AnimatedAppLoader;
