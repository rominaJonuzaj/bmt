import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

export default StyleSheet.create({
  checkboxList: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  checkboxValue: {
    color: COLORS.WHITE,
  },
  checkboxBase: {
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    marginRight: 10,
    borderColor: COLORS.WHITE,
  },
  checkboxChecked: {
    backgroundColor: COLORS.PAPASMURF500,
    borderColor: COLORS.PAPASMURF500,
  },
});
