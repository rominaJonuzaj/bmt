import * as React from "react";
import Svg, { Path, G, Defs, Rect, ClipPath } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  color: string;
}
const Meditation: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_878_73)">
    <Path d="M13.3119 6.74677C13.8528 5.71666 14.5955 4.80601 15.4959 4.0691C16.3963 3.33219 17.4358 2.78411 18.5525 2.45754C19.6692 2.13096 20.8402 2.03258 21.9957 2.16826C23.1513 2.30394 24.2677 2.67089 25.2784 3.24725C26.289 3.82361 27.1733 4.59757 27.8785 5.52299C28.5837 6.44841 29.0953 7.50635 29.3829 8.63373C29.6704 9.7611 29.7281 10.9348 29.5523 12.085C29.3766 13.2351 28.971 14.3381 28.3599 15.3281C29.4294 16.3353 30.1717 17.6404 30.4907 19.0744C30.8097 20.5084 30.6906 22.0052 30.1489 23.3708C29.6073 24.7363 28.6679 25.9077 27.4527 26.7331C26.2374 27.5585 24.8023 27.9999 23.3332 28.0001L11.9999 27.9988C10.5445 27.9977 9.10463 27.6987 7.76905 27.1203C6.43347 26.5419 5.23039 25.6963 4.23385 24.6356C3.23731 23.5748 2.46839 22.3213 1.97443 20.9523C1.48046 19.5832 1.2719 18.1276 1.36158 16.6749C1.45125 15.2222 1.83727 13.8033 2.49587 12.5053C3.15447 11.2074 4.07172 10.0581 5.19116 9.12791C6.3106 8.19777 7.60855 7.50657 9.00513 7.09684C10.4017 6.68711 11.8674 6.56752 13.3119 6.74543V6.74677ZM16.0732 7.4721C17.405 8.02414 18.6115 8.83958 19.6204 9.86948C20.6292 10.8994 21.4195 12.1225 21.9439 13.4654C23.341 13.1977 24.7858 13.3398 26.1039 13.8748C26.722 12.5558 26.8391 11.057 26.4335 9.65798C26.0279 8.25898 25.1272 7.05531 23.8994 6.27151C22.6716 5.48771 21.2007 5.17731 19.7609 5.39822C18.3211 5.61913 17.0109 6.35626 16.0746 7.4721H16.0732ZM23.3332 25.3334C24.1026 25.3333 24.86 25.143 25.5381 24.7794C26.2161 24.4158 26.7937 23.8901 27.2195 23.2493C27.6453 22.6085 27.906 21.8723 27.9785 21.1063C28.051 20.3404 27.9329 19.5684 27.6349 18.8591C27.3369 18.1498 26.8681 17.5251 26.2703 17.0408C25.6725 16.5565 24.9642 16.2274 24.2085 16.083C23.4528 15.9386 22.6731 15.9833 21.9388 16.2131C21.2045 16.4429 20.5385 16.8507 19.9999 17.4001V17.3334C19.9999 15.7512 19.5307 14.2045 18.6517 12.8889C17.7726 11.5733 16.5232 10.5479 15.0614 9.9424C13.5996 9.3369 11.991 9.17847 10.4392 9.48715C8.88732 9.79583 7.46186 10.5578 6.34304 11.6766C5.22422 12.7954 4.46229 14.2209 4.15361 15.7727C3.84493 17.3246 4.00336 18.9331 4.60886 20.3949C5.21436 21.8567 6.23974 23.1061 7.55533 23.9852C8.87093 24.8642 10.4176 25.3334 11.9999 25.3334H23.3332Z" fill="#001018"/>
    </G>
    <Defs>
    <ClipPath id="clip0_878_73">
    <Rect width="32" height="32" fill="white"/>
    </ClipPath>
    </Defs>
    </Svg>
    
  );
};

export default Meditation;
