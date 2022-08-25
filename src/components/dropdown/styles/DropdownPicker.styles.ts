import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: 38,
    width: "45%",
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  placeholder: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 3,
    color: COLORS.WHITE,
  },
  arrowIcon: {
    padding: 10,
    borderRadius: 3,
    backgroundColor: COLORS.PAPASMURF300,
  },
  listItem: { height: 35 },
  label: {
    color: "transparent",
  },
  dropDownContainer: {
    width: "45%",
    alignSelf: "center",
    borderWidth: 0,
    borderRadius: 2,
  },
  customDropDownContainer: {
    width: "45%",
    borderWidth: 0,
    borderRadius: 2,
    marginTop: 10,
  },
  selectedItem: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 3,
    color: COLORS.WHITE,
  },
  tickIcon: {
    position: "absolute",
    right: 3,
  },
  androidContainer: {
    minHeight: 220,
  },
  surveyDropdown: {
    width: "70%",
    backgroundColor: COLORS.WHITE,
    borderRadius: 3,
  },
  customSelectedItem: {
    color: COLORS.BLACK,
  },
  customSurveyDropdown: {
    alignSelf: "flex-start",
    width: "70%",
  },
});
