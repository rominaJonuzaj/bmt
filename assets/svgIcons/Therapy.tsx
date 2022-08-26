import * as React from "react";
import Svg, { G, Path, Defs, Rect, ClipPath } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  color: string;
}
const Therapy: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_2706_1431)">
    <Path d="M28 4V6.66667C28 19.5027 20.836 25.3333 12 25.3333H6.99067C6.77333 26.5493 6.66667 27.876 6.66667 29.3333H4C4 27.516 4.15467 25.8667 4.46133 24.3573C4.15467 22.632 4 20.2907 4 17.3333C4 9.96933 9.96933 4 17.3333 4C20 4 22.6667 5.33333 28 4ZM17.3333 6.66667C11.4427 6.66667 6.66667 11.4427 6.66667 17.3333C6.66667 17.816 6.67067 18.2813 6.68 18.728C8.352 16.0907 10.8013 14.0067 14.0053 12.176L15.328 14.4907C11.5213 16.6667 8.996 19.1387 7.70133 22.6667H12C20.02 22.6667 25.1613 17.3693 25.3293 7.184C23.5 7.36133 21.8 7.248 19.7027 6.93333C18.1693 6.70267 17.868 6.66667 17.3333 6.66667Z" fill="#001018"/>
    </G>
    <Defs>
    <ClipPath id="clip0_2706_1431">
    <Rect width="32" height="32" fill="white"/>
    </ClipPath>
    </Defs>
    </Svg>
    
  );
};

export default Therapy;
