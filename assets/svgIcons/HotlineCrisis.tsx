import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  color: string;
}
const HotlineCrisis: React.FC<Props> = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M8.6065 25.3333L2.6665 30V5.33333C2.6665 4.59695 3.26346 4 3.99984 4H27.9998C28.7362 4 29.3332 4.59695 29.3332 5.33333V24C29.3332 24.7364 28.7362 25.3333 27.9998 25.3333H8.6065ZM7.68384 22.6667H26.6665V6.66667H5.33317V24.5133L7.68384 22.6667ZM17.3332 13.3333H14.6665V16H17.3332V13.3333ZM9.33317 13.3333H11.9998V16H9.33317V13.3333ZM22.6665 13.3333H19.9998V16H22.6665V13.3333Z" fill="#001018"/>
</Svg>

  );
};

export default HotlineCrisis;
