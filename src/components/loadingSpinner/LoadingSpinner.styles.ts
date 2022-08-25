import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  spinner: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    bottom: 20,
  },
  text: {
    fontSize: 16,
    alignSelf: "center",
    top: "63%",
    color: COLORS.WHITE,
  },
});
