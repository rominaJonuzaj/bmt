import * as React from "react";

import { CustomisedText, TextProps } from "./Themed";

export function Text(props: TextProps) {
  return <CustomisedText {...props} style={[props.style, { fontFamily: "epilogue" }]} />;
}

export function BoldText(props: TextProps) {
  return <CustomisedText {...props} style={[props.style, { fontFamily: "epilogue-bold" }]} />;
}
