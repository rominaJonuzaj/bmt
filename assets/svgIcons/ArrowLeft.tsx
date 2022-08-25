import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  color: string;
}
const ArrowLeft: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M23.25 12H.75M11.25 1.5L.75 12l10.5 10.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowLeft;
