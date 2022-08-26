import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  color: string;
}
const Cog: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M12 19.501a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM1.5 12.001h3M19.5 12.001h3M12 1.501v3M12 19.501v3M4.575 4.576l2.123 2.122M17.303 17.303l2.122 2.123M19.425 4.576l-2.122 2.122M6.698 17.303l-2.123 2.123"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14.251a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Cog;
