import React from "react";
import { G, Line } from "react-native-svg";
import { polarToCartesian } from "../../helpers/geometry";

type Props = {
  radius: number;
  center: number;
  minutes: number;
  hours: number;
};

const ClockTicks = (props: Props) => {
  const { radius, center, hours } = props;
  const hoursArray = new Array(hours).fill(1);

  const hourSticks = hoursArray.map((hour, index) => {
    const start = polarToCartesian(center, center, radius - 3, index * 30);
    const end = polarToCartesian(center, center, radius, index * 30);
    const time = polarToCartesian(center, center, radius - 35, index * 30);
    return (
      <G key={index}>
        <Line stroke="white" strokeWidth={2} strokeLinecap="round" x1={start.x} x2={end.x} y1={start.y} y2={end.y} />
      </G>
    );
  });

  return <G>{hourSticks}</G>;
};

export default ClockTicks;
