import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginHorizontal: "5%",
  },
  text: {
    fontSize: 14,
    left: "5%",
    paddingTop: 5,
    color: COLORS.WHITE,
    fontWeight: "200",
  },
  checkbox: {
    flexWrap: "nowrap",
    paddingVertical: 13,
  },
  switchContainer: {},
  TextTitle: {
    color: COLORS.WHITE,
    fontSize: 14,
    paddingBottom: "4%",
    textTransform: "uppercase",
  },
  switchText: {
    fontSize: 15,
    color: COLORS.WHITE,
    paddingLeft: 80,
  },
  roundCheckBox: {
    flexWrap: "nowrap",
    paddingVertical: 13,
  },
});
