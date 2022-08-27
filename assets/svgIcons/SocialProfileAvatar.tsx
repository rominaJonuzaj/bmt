import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
  width?: number;
  height?: number;
  color: string;
}
const SocialProfileAvatar: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M4.5 23.25v-6.265A9.365 9.365 0 0110.875.75c7.5 0 8.823 6.5 11.625 13.5h-3v3a3 3 0 01-3 3H15v3"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SocialProfileAvatar;
