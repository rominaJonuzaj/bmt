import React, { Fragment, useEffect, useRef, useState } from "react";
import { View, Animated } from "react-native";
import { Text } from "../../components/StyledText";
import { COLORS } from "../../constants/Colors";
import styles from "./ProgressBar.styles";

interface Props {
  percentage: any;
  items?: any;
  blueBar?: boolean;
  customProgressBar?: boolean;
  barColor?: string;
  headerGreenBar?: boolean;
  headerBlueBar?: boolean;
}
const ProgressBar: React.FC<Props> = ({
  percentage,
  items,
  blueBar,
  customProgressBar,
  barColor,
  headerGreenBar,
  headerBlueBar,
}) => {
  const colors = [
    ...(blueBar ? [COLORS.PAPASMURF300, COLORS.DARK_GREY] : []),
    ...(customProgressBar
      ? barColor === "green"
        ? [COLORS.FOREST300, COLORS.DARK_GREY]
        : [COLORS.PAPASMURF300, COLORS.DARK_GREY]
      : []),
    ...Object.values(COLORS),
  ];

  const useInterval = (callback: (() => void) | undefined, delay: number | null | undefined) => {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    if (progress < 100) {
      setProgress(progress + 20);
    }
  }, 1000);

  useEffect(() => {
    return Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  let widths: Animated.AnimatedInterpolation[] = [];
  percentage?.map((item: string) => {
    widths.push(
      animation.current.interpolate({
        inputRange: [0, 50],
        outputRange: ["0%", (isNaN(+item) ? 100 : item) + "%"],
        extrapolate: "clamp",
      })
    );
  });

  return (
    <View
      style={[
        styles.progressBar,
        customProgressBar && {
          height: 18,
          shadowOffset: { width: 1, height: 5 },
          shadowColor: COLORS.BLACK,
          shadowOpacity: 0.3,
        },
      ]}
    >
      {items ? (
        items.map((_: any, index: any) => (
          <Fragment key={index}>
            {customProgressBar ? (
              <>
                <Animated.View style={{ backgroundColor: colors[index], width: widths[index] }} />
                {index === 0 && (
                  <View
                    style={
                      percentage[0] < 10
                        ? [
                            styles.roundedSimplePercentage,
                            barColor === "green" && { backgroundColor: COLORS.FOREST400 },
                            headerGreenBar && { backgroundColor: COLORS.FOREST500 },
                            headerBlueBar && { backgroundColor: COLORS.PAPASMURF700 },
                          ]
                        : [
                            styles.roundedPercentage,
                            barColor === "green" && { backgroundColor: COLORS.FOREST400 },
                            headerGreenBar && { backgroundColor: COLORS.FOREST500 },
                            headerBlueBar && { backgroundColor: COLORS.PAPASMURF700 },
                          ]
                    }
                  >
                    <Text style={styles.customPercentage}>{percentage[0]}</Text>
                  </View>
                )}
              </>
            ) : blueBar ? (
              <>
                {blueBar &&
                  index === 0 &&
                  (percentage[0] < 8 ? (
                    <Fragment>
                      <Animated.View style={{ backgroundColor: colors[index], width: widths[index] }} />
                      <Text style={styles.percentage}>{percentage[0]}%</Text>
                    </Fragment>
                  ) : (
                    <Animated.View style={{ backgroundColor: colors[index], width: widths[index] }}>
                      <Text style={styles.percentage}>{percentage[0]}%</Text>
                    </Animated.View>
                  ))}
              </>
            ) : (
              <Animated.View style={{ backgroundColor: colors[index], width: widths[index] }} />
            )}
          </Fragment>
        ))
      ) : (
        <Animated.View style={{ backgroundColor: colors[0], width: widths[0] }} />
      )}
    </View>
  );
};

export default ProgressBar;
