import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Phone = (props) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m15.04 22.39.012.007a5.533 5.533 0 0 0 6.884-.755l.774-.774a1.846 1.846 0 0 0 0-2.609L19.449 15a1.846 1.846 0 0 0-2.609 0 1.843 1.843 0 0 1-2.608 0L9.014 9.781a1.846 1.846 0 0 1 0-2.609 1.843 1.843 0 0 0 0-2.608L5.754 1.3a1.846 1.846 0 0 0-2.609 0l-.774.774a5.535 5.535 0 0 0-.756 6.884l.008.012A49.935 49.935 0 0 0 15.04 22.39Z"
      fill="#6699D4"
      stroke="#002A4C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Phone;
