import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  color: string;
}
const Home: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.3335 27.5312C5.3335 28.2676 5.93045 28.8646 6.66683 28.8646H25.3335C26.0699 28.8646 26.6668 28.2676 26.6668 27.5312V15.5312H30.6668L16.8975 3.01389C16.3888 2.55103 15.6115 2.55103 15.1028 3.01389L1.3335 15.5312H5.3335V27.5312ZM24.0002 13.0739V26.1979H8.00016V13.0739L16.0002 5.80188L24.0002 13.0739Z" fill="#001018"/>
    </Svg>
    
  );
};

export default Home;
