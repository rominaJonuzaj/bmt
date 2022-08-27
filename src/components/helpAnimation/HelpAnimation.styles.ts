import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  animation: {
    flex: 1,
    alignSelf: "flex-start",
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 16,
    alignSelf: "flex-end",
    top: "10%",
    color: COLORS.WHITE,
  },
});
