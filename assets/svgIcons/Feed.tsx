import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
  width?: number;
  height?: number;
  color: string;
}
const Feed: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M2.25 9.72a12 12 0 0112 12M7.25 21.25a4.56 4.56 0 00-4.5-4.53v4.53h4.5zM2.25 2.25a19.5 19.5 0 0119.5 19.5"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Feed;
