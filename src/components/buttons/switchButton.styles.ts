import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  switchContainer: {
    paddingVertical: 5,
    flexDirection: "row",
  },
  label: {
    marginLeft: 20,
    alignSelf: "center",
    fontSize: 15,
    color: COLORS.WHITE,
  },
});
