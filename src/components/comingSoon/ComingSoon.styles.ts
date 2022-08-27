import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.DARK_BLUE,
  },
  animation: {
    bottom: 10,
    height: "100%",
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 35,
    top: 70,
    fontWeight: "700",
    color: COLORS.DREAMSICLE300,
  },
});
