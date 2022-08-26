import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  color: string;
}
const ToolBox: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M21.75 6.751H2.25a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5zM16.5 6.751a4.5 4.5 0 10-9 0M.75 12.751h9.75M13.5 12.751h9.75"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 113 0v1.5A1.5 1.5 0 0112 15z"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ToolBox;
