import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Email = (props) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M21 4.75H3a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h18a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5Z"
      fill="#6699D4"
      stroke="#002A4C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="m22.161 5.3-8.144 6.264a3.308 3.308 0 0 1-4.034 0L1.84 5.3" fill="#6699D4" />
    <Path
      d="m22.161 5.3-8.144 6.264a3.308 3.308 0 0 1-4.034 0L1.84 5.3"
      stroke="#002A4C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Email;
