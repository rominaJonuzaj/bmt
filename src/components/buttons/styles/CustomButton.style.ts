import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

export default StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 4,
  },
  text: {
    alignSelf: "center",
    color: COLORS.WHITE,
    fontSize: 15,
    textTransform: "uppercase",
  },
});
