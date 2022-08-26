import React from "react";
import { Line } from "react-native-svg";
import { COLORS } from "../../constants/Colors";
import { polarToCartesian } from "../../helpers/geometry";
type Props = {
  center: number;
  radius: number;
  angle: number;
  strokeWidth: string;
  stroke: string;
  strokeOpacity: string;
  isHour?: boolean;
};

const Hand = (props: Props) => {
  const { center, radius, angle, isHour } = props;
  const { x, y } = polarToCartesian(center, center, isHour ? radius - 10 : radius, angle);

  return (
    <Line
      x1={center}
      y1={center}
      x2={x}
      y2={y}
      strokeWidth={2}
      strokeLinecap="round"
      strokeOpacity={1}
      stroke={COLORS.DREAMSICLE500}
    />
  );
};

export default Hand;
