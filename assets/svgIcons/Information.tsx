import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  color: string;
}
const Information: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.66667 16C2.66667 23.364 8.63601 29.3333 16 29.3333C23.364 29.3333 29.3333 23.364 29.3333 16C29.3333 8.63596 23.364 2.66663 16 2.66663C8.63601 2.66663 2.66667 8.63596 2.66667 16ZM26.6667 16C26.6667 21.891 21.891 26.6666 16 26.6666C10.109 26.6666 5.33334 21.891 5.33334 16C5.33334 10.1089 10.109 5.33329 16 5.33329C21.891 5.33329 26.6667 10.1089 26.6667 16ZM17.3333 9.33329V12H14.6667V9.33329H17.3333ZM17.3333 22.6666V14.6666H14.6667V22.6666H17.3333Z" fill="#001018"/>
    </Svg>
    
  );
};

export default Information;
