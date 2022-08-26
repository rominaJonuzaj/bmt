import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Svg from "react-native-svg";
import ClockTicks from "./ClockTicks";
import Hand from "./Hand";
import { useInterval } from "../../helpers/hooks";
import { getDateTimeInAngles } from "../../helpers/time";
import styled from "styled-components";

import { Frame } from "./Frame";
import moment from "moment-timezone";
import styles from "../../screens/employees/styles/Clock.styles";

const WIDTH = 50;
const DIAMETER = WIDTH - 6;
const CENTER = WIDTH / 2;
const RADIUS = DIAMETER / 2;
const HOURTICKCOUNT = 12;
const MINUTETICKCOUNT = 12 * 6;

const ClockFace = ({ timeZoneDb }: { timeZoneDb: string }) => {
  let [timeInAngles, setTimeInAngles] = useState(getDateTimeInAngles("00", "00"));

  useInterval(() => {
    const time = moment(moment().tz(timeZoneDb)).format(" hh:mm");
    const [hour, mins] = time.split(":");
    setTimeInAngles(getDateTimeInAngles(hour, mins));
  }, 6000);

  return (
    <View style={styles.clockBorder}>
      <Svg height={WIDTH} width={WIDTH}>
        <ClockTicks minutes={MINUTETICKCOUNT} hours={HOURTICKCOUNT} radius={RADIUS} center={CENTER} />
        <Minutes angle={timeInAngles.minutes} center={CENTER} radius={RADIUS} stroke="white" strokeWidth="5" />
        <Hours angle={timeInAngles.hours} center={CENTER} radius={RADIUS} strokeWidth="5" />
        <Frame dimens={50} />
      </Svg>
    </View>
  );
};

export default ClockFace;

const Minutes = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.primaryColor,
  strokeOpacity: "0.5",
}))``;

const Hours = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.primaryColor,
  strokeOpacity: "0.8",
  isHour: true,
}))``;
