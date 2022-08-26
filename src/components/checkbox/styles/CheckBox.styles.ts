import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

export default StyleSheet.create({
  checkboxList: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  checkboxValue: {
    color: COLORS.DARK_GREY,
    flexShrink: 1,
  },
  checkboxBase: {
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    marginRight: 10,
    borderColor: COLORS.DARK_GREY,
  },
  checkboxBorder: {
    borderColor: COLORS.WHITE,
  },
  checkboxChecked: {
    backgroundColor: COLORS.PAPASMURF500,
  },
});
