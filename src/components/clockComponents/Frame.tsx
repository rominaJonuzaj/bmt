import React from "react";
import { Circle } from "react-native-svg";
import { COLORS } from "../../constants/Colors";
export const Frame = (props: { dimens: number }) => {
  const cx = props.dimens / 2 || 0;

  return (
    <>
      <Circle cx={cx} cy={cx} r={2} fill="#FF6B00" stroke={COLORS.DREAMSICLE500} stroke-width="1px" />
      <Circle cx={cx} cy={cx} r={0.5} fill="none" stroke={COLORS.DARK_BLUE} stroke-width="1px" />
    </>
  );
};
