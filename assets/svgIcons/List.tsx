import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

interface Props {
  color: string;
}
const List: React.FC<Props> = ({ color }) => (
  <Svg width={24} height={24} fill="none">
    <G clipPath="url(#a)" stroke={color} strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M3 5.248a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM3 14.248a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM3 23.248a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM8.25 3.748h15M8.25 12.748h15M8.25 21.748h15" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default List;
